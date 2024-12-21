import express from "express";
import { userControler } from "./users.controler";
import validationData from "../../middleware/validationData";
import { userValidation } from "./users.validation";
import auth from "../../middleware/auth";

const router = express.Router();

router.post(
  "/register",
  validationData(userValidation.userValidationSchema),
  userControler.createUserControler
);

export const userRouter = router;
