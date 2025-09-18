import { HTTP_ERRORS } from '../../config/error-constants';
import { BaseHTTPError } from './baseHTTPError';

export class InternalServerError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.InternalServerError.message,
    public statusCode = HTTP_ERRORS.InternalServerError.statusCode,
    public errorCode = HTTP_ERRORS.InternalServerError.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class NotImplementedError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.NotImplemented.message,
    public statusCode = HTTP_ERRORS.NotImplemented.statusCode,
    public errorCode = HTTP_ERRORS.NotImplemented.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, NotImplementedError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class BadGatewayError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.BadGateway.message,
    public statusCode = HTTP_ERRORS.BadGateway.statusCode,
    public errorCode = HTTP_ERRORS.BadGateway.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, BadGatewayError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class ServiceUnavailableError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.ServiceUnavailable.message,
    public statusCode = HTTP_ERRORS.ServiceUnavailable.statusCode,
    public errorCode = HTTP_ERRORS.ServiceUnavailable.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, ServiceUnavailableError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class GatewayTimeoutError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.GatewayTimeout.message,
    public statusCode = HTTP_ERRORS.GatewayTimeout.statusCode,
    public errorCode = HTTP_ERRORS.GatewayTimeout.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, GatewayTimeoutError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class VersionNotSupportedError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.VersionNotSupported.message,
    public statusCode = HTTP_ERRORS.VersionNotSupported.statusCode,
    public errorCode = HTTP_ERRORS.VersionNotSupported.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, VersionNotSupportedError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class VariantAlsoNegotiatesError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.VariantAlsoNegotiates.message,
    public statusCode = HTTP_ERRORS.VariantAlsoNegotiates.statusCode,
    public errorCode = HTTP_ERRORS.VariantAlsoNegotiates.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, VariantAlsoNegotiatesError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class InsufficientStorageError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.InsufficientStorage.message,
    public statusCode = HTTP_ERRORS.InsufficientStorage.statusCode,
    public errorCode = HTTP_ERRORS.InsufficientStorage.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, InsufficientStorageError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class LoopDetectedError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.LoopDetected.message,
    public statusCode = HTTP_ERRORS.LoopDetected.statusCode,
    public errorCode = HTTP_ERRORS.LoopDetected.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, LoopDetectedError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class BandwidthLimitExceededError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.BandwidthLimitExceeded.message,
    public statusCode = HTTP_ERRORS.BandwidthLimitExceeded.statusCode,
    public errorCode = HTTP_ERRORS.BandwidthLimitExceeded.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, BandwidthLimitExceededError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class NotExtendedError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.NotExtended.message,
    public statusCode = HTTP_ERRORS.NotExtended.statusCode,
    public errorCode = HTTP_ERRORS.NotExtended.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, NotExtendedError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}

export class NetworkAuthenticationRequiredError extends BaseHTTPError {
  constructor(
    message = HTTP_ERRORS.NetworkAuthenticationRequired.message,
    public statusCode = HTTP_ERRORS.NetworkAuthenticationRequired.statusCode,
    public errorCode = HTTP_ERRORS.NetworkAuthenticationRequired.errorCode,
  ) {
    super(message, statusCode, errorCode);
    Object.setPrototypeOf(this, NetworkAuthenticationRequiredError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
    };
  }
}
