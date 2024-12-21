import { NextFunction, Request, RequestHandler, Response } from "express";

export const catchAsyncFun = (asyncFun: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(asyncFun(req, res, next)).catch((err) => next(err));
  };
};
