import express from "express";
import cors from "cors";
import router from "./router";
import globalErrorHandel from "./errorHandler/globalError";
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    status: "200",
    message: "Hello World!",
  });
});
app.use(router);
app.use(globalErrorHandel);
export default app;
