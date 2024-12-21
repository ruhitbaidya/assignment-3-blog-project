import express from "express";
import { blogControler } from "./blogs.controler";
import validationData from "../../middleware/validationData";
import { blogValidation } from "./blogs.validation";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../users/user.constant";

const router = express.Router();

router.post(
  "/",
  auth(USER_ROLE.user),
  validationData(blogValidation.validationBlogSchema),
  blogControler.createBlogControler
);

router.patch(
  "/:id",
  auth(USER_ROLE.user),
  validationData(blogValidation.updateValidationBlogSchema),
  blogControler.updateBlogControler
);

router.get("/", blogControler.getAllBlogControler);
router.delete("/:id", auth(USER_ROLE.user), blogControler.deleteBlogControler);
export const blogRouter = router;
