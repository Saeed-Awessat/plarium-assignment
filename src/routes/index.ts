import { Express } from "express";
import { userRouter } from "../controllers/User.controller";
import { platformRouter } from "../controllers/Platform.controller";

export const routes = (app: Express) => {
  app.use("/user", userRouter);
  app.use("/platforms", platformRouter);
};
