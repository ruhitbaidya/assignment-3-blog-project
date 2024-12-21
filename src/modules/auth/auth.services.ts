import { config } from "../../config/config";
import { AppError } from "../../errorHandler/appError";
import { UserModel } from "../users/users.model";
import { TAuthInterfact } from "./auth.interface";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
const loginServices = async (payload: TAuthInterfact) => {
  const isExist = await UserModel.findOne({ email: payload.email }).select(
    "password email role isBlocked"
  );
  if (!isExist) {
    throw new AppError(StatusCodes.UNAUTHORIZED, "Invalid credentials");
  }
  if (isExist?.isBlocked === true) {
    throw new AppError(StatusCodes.UNAUTHORIZED, "user Is Block");
  }
  const tokenInfo = {
    email: isExist?.email,
    role: isExist?.role,
  };
  const matchEmail = isExist.email === payload.email;
  const matchPass = await bcrypt.compare(payload?.password, isExist?.password);

  if (matchEmail && matchPass) {
    const tokenGenerate = jwt.sign(tokenInfo, config.token_secrate as string, {
      expiresIn: "2h",
    });
    return tokenGenerate;
  } else {
    throw new AppError(StatusCodes.UNAUTHORIZED, "Invalid credentials");
  }
};

export const authServices = {
  loginServices,
};
