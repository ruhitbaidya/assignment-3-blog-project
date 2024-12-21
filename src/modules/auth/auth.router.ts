import express from "express";
import { authControler } from "./auth.controler";
import validationData from "../../middleware/validationData";
import { loginValidation } from "./auth.validation";

const router = express.Router();

router.post(
  "/login",
  validationData(loginValidation.loginValidationSchema),
  authControler.loginControler
);

export const authRouter = router;
