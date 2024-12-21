import { NextFunction, Request, Response } from "express";
import { catchAsyncFun } from "../utils/createAsyncCatch";
import { AppError } from "../errorHandler/appError";
import { StatusCodes } from "http-status-codes";
import jwt, { JwtPayload } from "jsonwebtoken";
import { config } from "../config/config";
import { TRole } from "../modules/users/user.interface";
const auth = (...accesser: TRole[]) => {
  return catchAsyncFun(
    async (req: Request, res: Response, next: NextFunction) => {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        throw new AppError(StatusCodes.UNAUTHORIZED, "You Are Not Authorize");
      }

      jwt.verify(token, config.token_secrate as string, function (err, decode) {
        if (err) {
          throw new AppError(
            StatusCodes.UNAUTHORIZED,
            "You Are not Authorized"
          );
        }
        const role = (decode as JwtPayload).role;
        if (accesser && !accesser.includes(role)) {
          throw new AppError(StatusCodes.UNAUTHORIZED, "You Are Unauthorize");
        }

        req.user = decode as JwtPayload;
        next();
      });
    }
  );
};

export default auth;
