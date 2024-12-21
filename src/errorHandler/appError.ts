export class AppError extends Error {
  public statusCode: number = 200;
  constructor(statusCode: number, message: string, stack?: any) {
    super(message);
    (this.statusCode = statusCode), (this.message = message);
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
