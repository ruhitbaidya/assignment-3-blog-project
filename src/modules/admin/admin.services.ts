import { AppError } from "../../errorHandler/appError";
import { blogModel } from "../blogs/blogs.model";
import { UserModel } from "../users/users.model";

const blockUserServices = async (id: string) => {
  const checkBlock = await UserModel.findById(id);
  if (checkBlock?.isBlocked === true) {
    throw new AppError(406, "This user Already Blocked");
  }
  const result = await UserModel.findByIdAndUpdate(id, { isBlocked: true });
  return result;
};

const deleteBlogAdminServices = async (id: string) => {
  const result = await blogModel.findByIdAndDelete(id);
  return result;
};
export const adminServices = {
  blockUserServices,
  deleteBlogAdminServices,
};
