import { HTTP_ERRORS } from '../../config/error-constants';
import { BaseHTTPError } from './baseHTTPError';

export class BadRequestError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.BadRequestError.message,
    public statusCode = HTTP_ERRORS.BadRequestError.statusCode,
    public errorCode = HTTP_ERRORS.BadRequestError.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class UnauthenticatedError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.Unauthenticated.message,
    public statusCode = HTTP_ERRORS.Unauthenticated.statusCode,
    public errorCode = HTTP_ERRORS.Unauthenticated.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, UnauthenticatedError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class PaymentRequiredError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.PaymentRequired.message,
    public statusCode = HTTP_ERRORS.PaymentRequired.statusCode,
    public errorCode = HTTP_ERRORS.PaymentRequired.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, PaymentRequiredError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class UnauthorizedError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.Unauthorized.message,
    public statusCode = HTTP_ERRORS.Unauthorized.statusCode,
    public errorCode = HTTP_ERRORS.Unauthorized.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class NotFoundError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.NotFoundError.message,
    public statusCode = HTTP_ERRORS.NotFoundError.statusCode,
    public errorCode = HTTP_ERRORS.NotFoundError.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class MethodNotAllowedError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.MethodNotAllowed.message,
    public statusCode = HTTP_ERRORS.MethodNotAllowed.statusCode,
    public errorCode = HTTP_ERRORS.MethodNotAllowed.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, MethodNotAllowedError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class NotAcceptableError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.NotAcceptable.message,
    public statusCode = HTTP_ERRORS.NotAcceptable.statusCode,
    public errorCode = HTTP_ERRORS.NotAcceptable.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, NotAcceptableError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class ProxyAuthenticationRequiredError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.ProxyAuthenticationRequired.message,
    public statusCode = HTTP_ERRORS.ProxyAuthenticationRequired.statusCode,
    public errorCode = HTTP_ERRORS.ProxyAuthenticationRequired.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, ProxyAuthenticationRequiredError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class RequestTimeoutError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.RequestTimeout.message,
    public statusCode = HTTP_ERRORS.RequestTimeout.statusCode,
    public errorCode = HTTP_ERRORS.RequestTimeout.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, RequestTimeoutError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class ConflictError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.Conflict.message,
    public statusCode = HTTP_ERRORS.Conflict.statusCode,
    public errorCode = HTTP_ERRORS.Conflict.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, ConflictError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class GoneError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.Gone.message,
    public statusCode = HTTP_ERRORS.Gone.statusCode,
    public errorCode = HTTP_ERRORS.Gone.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, GoneError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class LengthRequiredError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.LengthRequired.message,
    public statusCode = HTTP_ERRORS.LengthRequired.statusCode,
    public errorCode = HTTP_ERRORS.LengthRequired.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, LengthRequiredError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class PreconditionFailedError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.PreconditionFailed.message,
    public statusCode = HTTP_ERRORS.PreconditionFailed.statusCode,
    public errorCode = HTTP_ERRORS.PreconditionFailed.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, PreconditionFailedError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class PayloadTooLargeError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.PayloadTooLarge.message,
    public statusCode = HTTP_ERRORS.PayloadTooLarge.statusCode,
    public errorCode = HTTP_ERRORS.PayloadTooLarge.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, PayloadTooLargeError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class URITooLongError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.URITooLong.message,
    public statusCode = HTTP_ERRORS.URITooLong.statusCode,
    public errorCode = HTTP_ERRORS.URITooLong.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, URITooLongError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class UnsupportedMediaTypeError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.UnsupportedMediaType.message,
    public statusCode = HTTP_ERRORS.UnsupportedMediaType.statusCode,
    public errorCode = HTTP_ERRORS.UnsupportedMediaType.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, UnsupportedMediaTypeError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class RangeNotSatisfiableError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.RangeNotSatisfiable.message,
    public statusCode = HTTP_ERRORS.RangeNotSatisfiable.statusCode,
    public errorCode = HTTP_ERRORS.RangeNotSatisfiable.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, RangeNotSatisfiableError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class ExpectationFailedError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.ExpectationFailed.message,
    public statusCode = HTTP_ERRORS.ExpectationFailed.statusCode,
    public errorCode = HTTP_ERRORS.ExpectationFailed.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, ExpectationFailedError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class TeapotError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.Teapot.message,
    public statusCode = HTTP_ERRORS.Teapot.statusCode,
    public errorCode = HTTP_ERRORS.Teapot.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, TeapotError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class PageExpiredError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.PageExpired.message,
    public statusCode = HTTP_ERRORS.PageExpired.statusCode,
    public errorCode = HTTP_ERRORS.PageExpired.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, PageExpiredError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class EnhanceYourCalmError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.EnhanceYourCalm.message,
    public statusCode = HTTP_ERRORS.EnhanceYourCalm.statusCode,
    public errorCode = HTTP_ERRORS.EnhanceYourCalm.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, EnhanceYourCalmError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class MisdirectedRequestError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.MisdirectedRequest.message,
    public statusCode = HTTP_ERRORS.MisdirectedRequest.statusCode,
    public errorCode = HTTP_ERRORS.MisdirectedRequest.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, MisdirectedRequestError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class UnprocessableEntityError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.UnprocessableEntity.message,
    public statusCode = HTTP_ERRORS.UnprocessableEntity.statusCode,
    public errorCode = HTTP_ERRORS.UnprocessableEntity.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, UnprocessableEntityError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class LockedError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.Locked.message,
    public statusCode = HTTP_ERRORS.Locked.statusCode,
    public errorCode = HTTP_ERRORS.Locked.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, LockedError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class FailedDependencyError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.FailedDependency.message,
    public statusCode = HTTP_ERRORS.FailedDependency.statusCode,
    public errorCode = HTTP_ERRORS.FailedDependency.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, FailedDependencyError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class TooEarlyError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.TooEarly.message,
    public statusCode = HTTP_ERRORS.TooEarly.statusCode,
    public errorCode = HTTP_ERRORS.TooEarly.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, TooEarlyError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class UpgradeRequiredError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.UpgradeRequired.message,
    public statusCode = HTTP_ERRORS.UpgradeRequired.statusCode,
    public errorCode = HTTP_ERRORS.UpgradeRequired.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, UpgradeRequiredError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class PreconditionRequiredError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.PreconditionRequired.message,
    public statusCode = HTTP_ERRORS.PreconditionRequired.statusCode,
    public errorCode = HTTP_ERRORS.PreconditionRequired.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, PreconditionRequiredError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class TooManyRequestsError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.TooManyRequests.message,
    public statusCode = HTTP_ERRORS.TooManyRequests.statusCode,
    public errorCode = HTTP_ERRORS.TooManyRequests.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, TooManyRequestsError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class RequestHeaderFieldsTooLargeError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.RequestHeaderFieldsTooLarge.message,
    public statusCode = HTTP_ERRORS.RequestHeaderFieldsTooLarge.statusCode,
    public errorCode = HTTP_ERRORS.RequestHeaderFieldsTooLarge.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, RequestHeaderFieldsTooLargeError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class UnavailableForLegalReasonsError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.UnavailableForLegalReasons.message,
    public statusCode = HTTP_ERRORS.UnavailableForLegalReasons.statusCode,
    public errorCode = HTTP_ERRORS.UnavailableForLegalReasons.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, UnavailableForLegalReasonsError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}
