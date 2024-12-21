import { Response } from "express";

type ResponseSend<T> = {
  success: boolean;
  message: string;
  statusCode: number;
  data?: T;
};

const sendResponse = <T>(res: Response, payload: ResponseSend<T>) => {
  return res.status(payload.statusCode).json({
    success: payload.success,
    message: payload.message,
    statusCode: payload.statusCode,
    data: payload.data,
  });
};

export default sendResponse;
