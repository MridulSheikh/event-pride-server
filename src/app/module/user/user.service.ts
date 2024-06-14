import httpStatus from "http-status";
import AppError from "../../Error/AppError";
import { User } from "./user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config";

const createUserService = async (user: { email: string; password: string }) => {
  const isUserExist = await User.findOne({ email: user.email });

  if (isUserExist) {
    throw new AppError(
      httpStatus.CONFLICT,
      `This user ${user.email} already Exist`
    );
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(user.password, 10);

  const result = await User.create({ ...user, password: hashedPassword });

  // Generate JWT token
  const token = jwt.sign({ email: result.email }, config.jwt_secret as string, {
    expiresIn: config.jwt_Expire_date as string,
  });

  return token;
};

const loginUserServices = async (email: string, password: string) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new AppError(httpStatus.UNAUTHORIZED, `user or password incorrect`);
  }

  // Compare hashed password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new AppError(httpStatus.UNAUTHORIZED, `user or password incorrect`);
  }

  // Generate JWT token
  const token = jwt.sign({ email: user.email }, config.jwt_secret as string, {
    expiresIn: config.jwt_Expire_date as string,
  });
  return token;
};

export default {
  createUserService,
  loginUserServices,
};
