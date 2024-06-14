import { Schema, model } from "mongoose";
import { TUserInterface } from "./user.interface";

const userModalSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const User = model<TUserInterface>("user", userModalSchema);
