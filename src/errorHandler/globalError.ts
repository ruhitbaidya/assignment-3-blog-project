import { ErrorRequestHandler } from "express";
import handelZodError from "./zodError";
import { ZodError } from "zod";
import { AppError } from "./appError";

const globalErrorHandel: ErrorRequestHandler = (
  err: AppError,
  req,
  res,
  next
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "internal server error";

  if (err instanceof ZodError) {
    const zodErr = handelZodError(err);
    statusCode = zodErr.statusCode;
    message = zodErr.message;
  }
  res.status(statusCode).json({
    success: false,
    message,
    statusCode,
    error: err,
    stack: err.stack,
  });
};

export default globalErrorHandel;
