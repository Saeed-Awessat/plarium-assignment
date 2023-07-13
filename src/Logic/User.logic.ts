import { Model } from "../models";

export const userLogic = async (userID: string) => {
  let userInfo: Array<any> = [];
  try {
    await Model.GameActions.findAll({
      where: { user_id: userID },
    }).then(async (userInfo) => {
      if (!userInfo.length) {
        throw { msg: "user not found!", userInfo: [], status: 404 };
      }
      userInfo = userInfo;
    });

    return {
      userInfo,
    };
  } catch (error: any) {
    if (error.userInfo) return error;
    return { error };
  }
};
