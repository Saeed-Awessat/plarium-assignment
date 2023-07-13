import { Request, Response, Router } from "express";
import { platformLogic } from "../Logic/Platform.logic";

export const platformRouter = Router();

interface MessageObj {
  message: string;
  platformsInfo?: any;
}

platformRouter.get("/", async (req: Request, res: Response) => {
  const result = await platformLogic();

  console.log({ result });

  if (result.error) {
    const { error } = result;
    const status = error.status ?? 500;
    const messageObj: MessageObj = { message: error.msg ?? error };
    if (error.platformsInfo) messageObj["platformsInfo"] = error.platformsInfo;

    res.status(status).json(messageObj);
  } else {
    console.log({ result });
    res.status(200).json(result);
  }
});
