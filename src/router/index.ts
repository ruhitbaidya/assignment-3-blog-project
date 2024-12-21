import express from "express";

const router = express.Router();
import { userRouter } from "../modules/users/users.router";
import { authRouter } from "../modules/auth/auth.router";
import { blogRouter } from "../modules/blogs/blogs.router";
import { adminRouter } from "../modules/admin/admin.router";

const routers = [
  {
    path: "/auth",
    elements: userRouter,
  },
  {
    path: "/auth",
    elements: authRouter,
  },
  {
    path: "/blogs",
    elements: blogRouter,
  },
  {
    path: "/admin",
    elements: adminRouter,
  },
];

routers.forEach((item) => router.use(`/api${item.path}`, item.elements));

export default router;
