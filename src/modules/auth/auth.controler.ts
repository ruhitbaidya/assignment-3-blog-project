import { catchAsyncFun } from "../../utils/createAsyncCatch";
import sendResponse from "../../utils/sendResonse";
import { authServices } from "./auth.services";

const loginControler = catchAsyncFun(async (req, res) => {
  const token = await authServices.loginServices(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Login Successfully",
    data: { token },
  });
});

export const authControler = {
  loginControler,
};
