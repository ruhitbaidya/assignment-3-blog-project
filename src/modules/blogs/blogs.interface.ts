import { Types } from "mongoose";

export type TBlogInterFace = {
  title: string;
  content: string;
  author: Types.ObjectId;
  isPublished: boolean;
};

export type TBlogUpdateInterFace = {
  title: string;
  content: string;
  email: string;
};
