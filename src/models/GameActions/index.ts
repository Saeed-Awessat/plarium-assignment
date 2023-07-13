import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../util/database";

// class GameActions extends Model {}

const GameActions = sequelize.define(
  "game_actions",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    platform: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    action: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: DataTypes.FLOAT,
  },
  {
    schema: "game",
    timestamps: false, // Disable timestamps
  }
);

export { GameActions };
