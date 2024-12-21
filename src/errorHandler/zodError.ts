import { ZodError } from "zod";
import { TGenericReturnFun } from "./errorInterface";
import { ZodIssue } from "zod-validation-error";

const handelZodError = (err: ZodError): TGenericReturnFun => {
  const errorSource = err.issues.map((issu: ZodIssue) => {
    return {
      path: issu.path[issu.path.length - 1],
      message: issu.message,
    };
  });
  const statusCode = 400;
  return {
    message: "Validation error",
    statusCode,
    error: errorSource,
  };
};

export default handelZodError;
