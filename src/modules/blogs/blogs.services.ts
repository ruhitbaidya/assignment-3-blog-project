import { TBlogInterFace, TBlogUpdateInterFace } from "./blogs.interface";
import { blogModel } from "./blogs.model";
import { AppError } from "../../errorHandler/appError";
import { UserModel } from "../users/users.model";
import { userMatcher } from "../../utils/userMatcher";
import mongoose from "mongoose";

const createBlogServices = async (payload: TBlogInterFace) => {
  console.log(payload);
  const result = (await blogModel.create(payload)).populate("author");
  return result;
};

const updateBlogServices = async (
  id: string,
  payload: TBlogUpdateInterFace,
  email: string
) => {
  const matcher = await userMatcher(id, email);
  if (!matcher) {
    throw new AppError(404, "You Are the wrong people");
  }
  const result = await blogModel.findOneAndUpdate({ _id: id }, payload);
  return result;
};

const deleteBlogServices = async (id: string, email: string) => {
  const matcher = await userMatcher(id, email);
  if (!matcher) {
    throw new AppError(404, "You Are the wrong people");
  }
  const result = await blogModel.findOneAndDelete({ _id: id });

  return result;
};

const getAllBlogServices = async (query: Record<string, unknown>) => {
  const searchFields = ["title", "content"];
  const filters = ["search", "sortBy", "sortOrder"];
  const queryObject: any = { ...query };

  let searchTerm = "";
  if (query?.search) {
    searchTerm = query?.search as string;
  }

  const searchQuery = blogModel.find({
    $or: searchFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: "i" },
    })),
  });

  filters.forEach((ele) => delete queryObject[ele]);

  if (queryObject?.filter) {
    searchQuery.find({ author: queryObject.filter });
  }

  let sort = "createdAt";
  if (query?.sortBy) {
    sort = query?.sortBy as string;
    sort = query?.sortOrder === "asc" ? sort : `-${sort}`;
  }

  const result = await searchQuery.sort(sort).populate("author");

  return result;
};

export const blogServices = {
  createBlogServices,
  updateBlogServices,
  deleteBlogServices,
  getAllBlogServices,
};
