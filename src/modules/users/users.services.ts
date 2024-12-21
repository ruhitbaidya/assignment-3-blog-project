import { TUserInterface } from "./user.interface";
import { UserModel } from "./users.model";

const createUserServices = async (payload: TUserInterface) => {
  const result = await UserModel.create(payload);
  return {
    _id: result?._id,
    name: result?.name,
    email: result?.email,
  };
};

export const userServices = {
  createUserServices,
};
