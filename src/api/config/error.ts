import { HttpStatusCode } from '@/api/config/status';

export class CustomError extends Error {
  statusCode: HttpStatusCode;
  message: string;
  code: string;

  constructor(statusCode: HttpStatusCode, message?: string, code?: string) {
    super();
    this.message = message || '';
    this.statusCode = statusCode || 200;
    this.code = code || '';
  }
}
