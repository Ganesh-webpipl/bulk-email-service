export const HTTP_ERRORS = {
  BadRequestError: {
    statusCode: 400,
    errorCode: 'BAD_REQUEST',
    message: 'Bad Request. Could not process the operation',
  },
  Unauthenticated: {
    statusCode: 401,
    errorCode: 'UNAUTHENTICATED',
    message: 'User is Not Authenticated',
  },
  PaymentRequired: {
    statusCode: 402,
    errorCode: 'PAYMENT_REQUIRED',
    message: 'Payment is required to access this resource',
  },
  Unauthorized: {
    statusCode: 403,
    errorCode: 'UNAUTHORIZED',
    message: 'Unauthorized operation',
  },
  NotFoundError: {
    statusCode: 404,
    errorCode: 'NOT_FOUND',
    message: 'Item Not Found',
  },
  MethodNotAllowed: {
    statusCode: 405,
    errorCode: 'METHOD_NOT_ALLOWED',
    message: 'Method is not allowed',
  },
  NotAcceptable: {
    statusCode: 406,
    errorCode: 'NOT_ACCEPTABLE',
    message: 'The server cannot produce a response matching the list of acceptable values',
  },
  ProxyAuthenticationRequired: {
    statusCode: 407,
    errorCode: 'PROXY_AUTHENTICATION_REQUIRED',
    message: 'Proxy Authentication is required to access this resource',
  },
  RequestTimeout: {
    statusCode: 408,
    errorCode: 'REQUEST_TIMEOUT',
    message: 'The server timed out waiting for the request',
  },
  Conflict: {
    statusCode: 409,
    errorCode: 'CONFLICT',
    message: 'Conflict in the request',
  },
  Gone: {
    statusCode: 410,
    errorCode: 'GONE',
    message: 'The resource requested is no longer available and will not be available again',
  },
  LengthRequired: {
    statusCode: 411,
    errorCode: 'LENGTH_REQUIRED',
    message:
      'The request did not specify the length of its content, which is required by the requested resource',
  },
  PreconditionFailed: {
    statusCode: 412,
    errorCode: 'PRECONDITION_FAILED',
    message:
      'The server does not meet one of the preconditions that the requester put on the request',
  },
  PayloadTooLarge: {
    statusCode: 413,
    errorCode: 'PAYLOAD_TOO_LARGE',
    message: 'The file size exceeds the maximum limit',
  },
  URITooLong: {
    statusCode: 414,
    errorCode: 'URI_TOO_LONG',
    message: 'The URI is too long',
  },
  UnsupportedMediaType: {
    statusCode: 415,
    errorCode: 'UNSUPPORTED_MEDIA_TYPE',
    message: 'The file type is not supported. Allowed types: pdf, doc, docx',
  },
  RangeNotSatisfiable: {
    statusCode: 416,
    errorCode: 'RANGE_NOT_SATISFIABLE',
    message: 'The range specified is not satisfiable',
  },
  ExpectationFailed: {
    statusCode: 417,
    errorCode: 'EXPECTATION_FAILED',
    message:
      'The expectation given in an Expect request-header field could not be met by at least one of the inbound servers',
  },
  Teapot: {
    statusCode: 418,
    errorCode: 'I_AM_A_TEAPOT',
    message: 'The server refuses to brew coffee because it is a teapot',
  },
  PageExpired: {
    statusCode: 419,
    errorCode: 'PAGE_EXPIRED',
    message: 'The page has expired',
  },
  EnhanceYourCalm: {
    statusCode: 420,
    errorCode: 'ENHANCE_YOUR_CALM',
    message: 'Enhance your calm, you must be on a roll!',
  },
  MisdirectedRequest: {
    statusCode: 421,
    errorCode: 'MISDIRECTED_REQUEST',
    message: 'The request was directed at a server that is not able to produce a response',
  },
  UnprocessableEntity: {
    statusCode: 422,
    errorCode: 'UNPROCESSABLE_ENTITY',
    message: 'The request was well-formed but contains semantic errors, such as validation failure',
  },
  Locked: {
    statusCode: 423,
    errorCode: 'LOCKED',
    message: 'The resource is locked',
  },
  FailedDependency: {
    statusCode: 424,
    errorCode: 'FAILED_DEPENDENCY',
    message: 'The request failed due to a failure of a previous request',
  },
  TooEarly: {
    statusCode: 425,
    errorCode: 'TOO_EARLY',
    message: 'The server is unwilling to risk processing a request that might be replayed',
  },
  UpgradeRequired: {
    statusCode: 426,
    errorCode: 'UPGRADE_REQUIRED',
    message: 'The server refuses to perform the request using the current protocol',
  },
  PreconditionRequired: {
    statusCode: 428,
    errorCode: 'PRECONDITION_REQUIRED',
    message: 'The server requires a certain precondition to be met for the request to proceed',
  },
  TooManyRequests: {
    statusCode: 429,
    errorCode: 'TOO_MANY_REQUESTS',
    message: 'Too many request attempts from this IP',
  },
  RequestHeaderFieldsTooLarge: {
    statusCode: 431,
    errorCode: 'REQUEST_HEADER_FIELDS_TOO_LARGE',
    message:
      'The server is unwilling to process the request because its header fields are too large',
  },
  UnavailableForLegalReasons: {
    statusCode: 451,
    errorCode: 'UNAVAILABLE_FOR_LEGAL_REASONS',
    message: 'The server is denying access to the resource as a consequence of a legal demand',
  },
  InternalServerError: {
    statusCode: 500,
    errorCode: 'INTERNAL_SERVER_ERROR',
    message: 'Something Went Wrong',
  },
  NotImplemented: {
    statusCode: 501,
    errorCode: 'NOT_IMPLEMENTED',
    message: 'The server is not implementing the functionality required to fulfill the request',
  },
  BadGateway: {
    statusCode: 502,
    errorCode: 'BAD_GATEWAY',
    message:
      'The server is acting as a gateway or proxy and received an invalid response from the upstream server',
  },
  ServiceUnavailable: {
    statusCode: 503,
    errorCode: 'SERVICE_UNAVAILABLE',
    message:
      'The server is temporarily unable to handle the request, typically due to being overloaded or down for maintenance',
  },
  GatewayTimeout: {
    statusCode: 504,
    errorCode: 'GATEWAY_TIMEOUT',
    message:
      'The server, while acting as a gateway, did not receive a timely response from the upstream server',
  },
  VersionNotSupported: {
    statusCode: 505,
    errorCode: 'VERSION_NOT_SUPPORTED',
    message: 'The server does not support the requested HTTP version',
  },
  VariantAlsoNegotiates: {
    statusCode: 506,
    errorCode: 'VARIANT_ALSO_NEGOTIATES',
    message:
      'The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process',
  },
  InsufficientStorage: {
    statusCode: 507,
    errorCode: 'INSUFFICIENT_STORAGE',
    message: 'The server is unable to store the representation needed to complete the request',
  },
  LoopDetected: {
    statusCode: 508,
    errorCode: 'LOOP_DETECTED',
    message: 'The server detected an infinite loop while processing the request',
  },
  BandwidthLimitExceeded: {
    statusCode: 509,
    errorCode: 'BANDWIDTH_LIMIT_EXCEEDED',
    message: 'The server has exceeded its bandwidth limit',
  },
  NotExtended: {
    statusCode: 510,
    errorCode: 'NOT_EXTENDED',
    message: 'Further extensions to the request are required for the server to fulfill it',
  },
  NetworkAuthenticationRequired: {
    statusCode: 511,
    errorCode: 'NETWORK_AUTHENTICATION_REQUIRED',
    message: 'The client needs to authenticate to gain network access',
  },
};
