import { AnyZodObject } from "zod";

import { NextFunction, Request, Response } from "express";
import { catchAsyncFun } from "../utils/createAsyncCatch";

const validationData = (schema: AnyZodObject) => {
  return catchAsyncFun(
    async (req: Request, res: Response, next: NextFunction) => {
      await schema.parseAsync(req.body);
      next();
    }
  );
};

export default validationData;
