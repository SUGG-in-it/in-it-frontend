export const enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export class CustomError extends Error {
  statusCode: HttpStatusCode;
  message: string;

  constructor(statusCode: HttpStatusCode, message?: string) {
    super(message);
    this.statusCode = statusCode;
  }
}
