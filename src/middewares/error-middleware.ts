import { ErrorRequestHandler } from 'express';
import { BaseHTTPError } from '../utils/errors';
import _get from 'lodash/get';
import { httpErrorType } from '../types/errorTypes';
import { logger } from '../utils/log/winston';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (!err) return next();

  const handleError = (handler: (err: any) => httpErrorType, httpError: boolean = false) => {
    const { message, errorCode, statusCode } = handler(err);

    if (!req.logger?.dontLog) {
      logger.warn(message ?? 'Error occurred', {
        userId: req.user?._id,
        service: req.originalUrl.split('/')[2],
        errorCode,
      });
    }

    res
      .status(httpError ? (statusCode as number) : 200)
      .send({ status: 'error', message, errorCode, statusCode });
  };

  if (err instanceof BaseHTTPError) {
    handleError(() => err.serializeErrors());
  } else if (err.name && errorHandlers[err.name]) {
    handleError(errorHandlers[err.name]);
  } else {
    logger.error('Unhandled error:', err);
    handleError(onUnexpectedError, true);
  }
};

export { errorHandler };

const onUnexpectedError = (err: any): httpErrorType => {
  const statusCode = _get(err, ['statusCode'], 500);
  const message = _get(err, ['message'], 'Something Went Wrong');
  const errorCode = _get(err, ['errorCode'], 'INTERNAL_SERVER_ERROR');
  return {
    message,
    errorCode,
    statusCode,
  };
};

const onMongoErrorHandler = (err: any): httpErrorType => {
  if (err.code === 11000) {
    const dupKey = Object.keys(err.keyPattern || {})[0]; // e.g., 'email', 'phone'
    const value = err.keyValue?.[dupKey];

    let message = 'Duplicate key error.';
    if (dupKey === 'email') {
      message = `Email '${value}' already exists.`;
    } else if (dupKey === 'phone') {
      message = `Phone number '${value}' already exists.`;
    } else if (dupKey) {
      message = `Field '${dupKey}' with value '${value}' already exists.`;
    }

    return {
      message,
      errorCode: 'DUPLICATE_KEY_ERROR',
      statusCode: 400,
    };
  }

  if (err?.errInfo?.details?.schemaRulesNotSatisfied) {
    const errorMessages: string[] = [];

    err.errInfo.details.schemaRulesNotSatisfied.forEach((rule: any, ruleIndex: number) => {
      errorMessages.push(`\n--- Validation Rule ${ruleIndex + 1} ---`);
      errorMessages.push(`Operator: ${rule.operatorName}`);

      rule.propertiesNotSatisfied?.forEach((property: any) => {
        errorMessages.push(`  Property: ${property.propertyName}`);

        property.details?.forEach((detail: any, detailIndex: number) => {
          errorMessages.push(`    [Detail ${detailIndex + 1}]`);
          errorMessages.push(`      Expected BSON Type: ${JSON.stringify(detail.specifiedAs)}`);
          errorMessages.push(`      Operator: ${detail.operatorName || 'N/A'}`);
          errorMessages.push(`      Reason: ${detail.reason}`);
          errorMessages.push(`      Given Value: ${JSON.stringify(detail.consideredValue)}`);
          errorMessages.push(`      Considered Type: ${detail.consideredType}`);
        });

        errorMessages.push('---');
      });
    });

    logger.debug(errorMessages.join('\n'));

    return {
      message: 'MongoDB schema validation error',
      errorCode: 'MONGO_VALIDATION_ERROR',
      statusCode: 500,
    };
  }

  const errorMessage =
    err.message ??
    'MongoDB Error: No schema validation errors found, but a database error occurred.';
  const errorCode = err.code || 'MONGO_SERVER_ERROR';
  const errorDetails = err?.stack || 'No stack trace available';

  logger.error(`
    MongoDB Error:
    Message: ${errorMessage}
    Code: ${errorCode}
    Stack Trace: ${errorDetails}
  `);

  return {
    message: errorMessage,
    errorCode: errorCode,
    statusCode: 500,
  };
};

const errorHandlers: Record<string, (err: any) => httpErrorType> = {
  MongoServerError: onMongoErrorHandler,
};
