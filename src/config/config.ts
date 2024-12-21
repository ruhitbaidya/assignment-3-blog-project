import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });

export const config = {
  url_Port: process.env.PORT,
  db_url: process.env.DB_URL,
  salt_round_password: process.env.SALT_ROUTND_FOR_PASSWORD,
  token_secrate: process.env.TOKEN_SECRATE,
};
