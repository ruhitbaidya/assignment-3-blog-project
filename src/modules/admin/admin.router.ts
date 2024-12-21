import express from "express";
import { adminControler } from "./admin.controler";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../users/user.constant";

const router = express.Router();

router.patch(
  "/users/:userId/block",
  auth(USER_ROLE.admin),
  adminControler.blockUserControler
);

router.delete(
  "/blogs/:id",
  auth(USER_ROLE.admin),
  adminControler.deleteBlogAdmin
);
export const adminRouter = router;
