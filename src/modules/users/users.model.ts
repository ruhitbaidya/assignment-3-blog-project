import { model, Schema } from "mongoose";
import { TUserInterface } from "./user.interface";
import { config } from "../../config/config";
import bcrypt from "bcrypt";
import { AppError } from "../../errorHandler/appError";
import { StatusCodes } from "http-status-codes";
const UserSchema = new Schema<TUserInterface>(
  {
    name: {
      type: String,
      required: [true, "Must give Your Full name"],
    },
    email: {
      type: String,
      required: [true, "You Must Provied A valid Email Adderse"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please provide a valid email address",
      ],
    },

    password: {
      type: String,
      required: true,
      select: 0,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  try {
    const isExist = await UserModel.findOne({ email: this.email });
    if (isExist) {
      throw new AppError(StatusCodes.CONFLICT, "This user Are Already Exist");
    }
    const hash = await bcrypt.hash(
      this.password,
      Number(config.salt_round_password)
    );
    this.password = hash;
    next();
  } catch (err: any) {
    console.error(err);
    next(err);
  }
});

export const UserModel = model<TUserInterface>("user", UserSchema);
