import { Request, Response, Router } from "express";
import { userLogic } from "../Logic/User.logic";

export const userRouter = Router();

interface MessageObj {
  message: string;
  userInfo?: any;
}

userRouter.get("/:userId", async (req: Request, res: Response) => {
  const userId: string = req.params.userId;
  const result = await userLogic(userId);

  if (result.error) {
    const { error } = result;
    const status = error.status ?? 500;
    const messageObj: MessageObj = { message: error.msg ?? error };
    if (error.userInfo) messageObj["userInfo"] = error.userInfo;

    res.status(status).json(messageObj);
  } else {
    res.status(200).json(result);
  }
});
