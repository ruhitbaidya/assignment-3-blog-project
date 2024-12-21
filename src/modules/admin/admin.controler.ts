import { catchAsyncFun } from "../../utils/createAsyncCatch";
import sendResponse from "../../utils/sendResonse";
import { adminServices } from "./admin.services";

const blockUserControler = catchAsyncFun(async (req, res) => {
  await adminServices.blockUserServices(req.params.userId);
  sendResponse(res, {
    success: true,
    message: "User blocked successfully",
    statusCode: 200,
  });
});

const deleteBlogAdmin = catchAsyncFun(async (req, res) => {
  await adminServices.deleteBlogAdminServices(req.params.id);
  sendResponse(res, {
    success: true,
    message: "Blog deleted successfully",
    statusCode: 200,
  });
});
export const adminControler = {
  blockUserControler,
  deleteBlogAdmin,
};
