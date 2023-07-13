import { Model } from "../models";

export const platformLogic = async () => {
  let platformsInfo: Array<any> = [];
  try {
    await Model.GameActions.findAll({
      attributes: ["platform"], // Specify the column you want to use for uniqueness
      group: ["platform"], // // Group by the column(s) you want to use for uniqueness
    }).then((platforms) => {
      if (!platforms.length) {
        throw { msg: "platforms not found!", platformsInfo: [], status: 404 };
      }
      platformsInfo = platforms;
    });

    return {
      platforms: platformsInfo,
    };
  } catch (error: any) {
    if (error.platformsInfo) return error;
    return { error };
  }
};
