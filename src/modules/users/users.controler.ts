import { catchAsyncFun } from "../../utils/createAsyncCatch";
import sendResponse from "../../utils/sendResonse";
import { userServices } from "./users.services";

const createUserControler = catchAsyncFun(async (req, res) => {
  const getInfo = await userServices.createUserServices(req.body);
  sendResponse(res, {
    success: true,
    message: "User registered successfully",
    statusCode: 201,
    data: getInfo,
  });
});

export const userControler = {
  createUserControler,
};
