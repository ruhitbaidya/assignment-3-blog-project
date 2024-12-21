import { catchAsyncFun } from "../../utils/createAsyncCatch";
import sendResponse from "../../utils/sendResonse";

import { UserModel } from "../users/users.model";
import { blogServices } from "./blogs.services";

const createBlogControler = catchAsyncFun(async (req, res) => {
  const { email } = req.user;
  const getuser = await UserModel.findOne({ email });
  const getBlog = await blogServices.createBlogServices({
    ...req.body,
    author: getuser?._id,
  });
  sendResponse(res, {
    success: true,
    message: "Blog created successfully",
    statusCode: 201,
    data: {
      _id: getBlog?._id,
      title: getBlog?.title,
      content: getBlog?.content,
      author: getBlog?.author,
    },
  });
});

const updateBlogControler = catchAsyncFun(async (req, res) => {
  const id = req.params.id;
  const { email } = req.user;
  const getBlog = await blogServices.updateBlogServices(id, req.body, email);
  sendResponse(res, {
    success: true,
    message: "Blog updated successfully",
    statusCode: 200,
    data: {
      _id: getBlog?._id,
      title: getBlog?.title,
      content: getBlog?.content,
      author: getBlog?.author,
    },
  });
});

const deleteBlogControler = catchAsyncFun(async (req, res) => {
  const id = req.params.id;
  const { email } = req.user;
  await blogServices.deleteBlogServices(id, email);
  sendResponse(res, {
    success: true,
    message: "Blog Delete successfully",
    statusCode: 200,
  });
});

const getAllBlogControler = catchAsyncFun(async (req, res) => {
  const getInfo = await blogServices.getAllBlogServices(req.query);
  sendResponse(res, {
    success: true,
    message: "Blogs fetched successfully",
    statusCode: 200,
    data: getInfo,
  });
});
export const blogControler = {
  createBlogControler,
  updateBlogControler,
  deleteBlogControler,
  getAllBlogControler,
};
