import { model, Schema } from "mongoose";
import { TBlogInterFace } from "./blogs.interface";
import { AppError } from "../../errorHandler/appError";
import { StatusCodes } from "http-status-codes";

const blogSchema = new Schema<TBlogInterFace>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

blogSchema.pre(["findOneAndDelete", "findOneAndUpdate"], async function (next) {
  try {
    const context = this.getQuery()._id;
    if (!context) {
      throw new AppError(StatusCodes.NOT_FOUND, "Blog Id Not Found");
    }
    const isExist = await blogModel.findById(context);
    if (!isExist) {
      throw new AppError(StatusCodes.NOT_FOUND, "This Blog Not Found");
    }

    next();
  } catch (err: any) {
    next(err);
  }
});
export const blogModel = model<TBlogInterFace>("blog", blogSchema);
