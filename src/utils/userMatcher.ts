import { AppError } from "../errorHandler/appError";
import { blogModel } from "../modules/blogs/blogs.model";
import { UserModel } from "../modules/users/users.model";

export const userMatcher = async (blogId: string, userEmail: string) => {
  const blog = await blogModel.findById(blogId);
  const user = await UserModel.findOne({ email: userEmail });
  if (blog?.author.equals(user?._id)) {
    return true;
  } else {
    return false;
  }
};
