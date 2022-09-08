import { HttpStatusCode } from '@/api/config/status';

export class CustomError extends Error {
  statusCode: HttpStatusCode;
  message: string;

  constructor(statusCode: HttpStatusCode, message?: string) {
    super(message);
    this.statusCode = statusCode;
  }
}
