import { httpErrorType } from "../../types/errorTypes";

export abstract class BaseHTTPError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public errorCode: string,
  ) {
    super(message);
    Object.setPrototypeOf(this, BaseHTTPError.prototype);
  }

  abstract serializeErrors(): httpErrorType;
}
