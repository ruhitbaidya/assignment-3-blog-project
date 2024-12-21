import mongoose from "mongoose";
import { config } from "./config/config";
import app from "./app";

const connectionDatabase = async () => {
  await mongoose.connect(config.db_url as string);
  app.listen(config.url_Port, () => {
    console.log("server is running port 5000");
  });
};

connectionDatabase();
