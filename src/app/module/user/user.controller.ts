import catchAsync from "../../utils/cathAsync";
import userService from "./user.service";

const createUserController = catchAsync(async (req, res) => {
  const result = await userService.createUserService(req.body);
  res.status(201).send({
    success: true,
    statusCode: 201,
    message: "user created successfully",
    token: result,
  });
});

const loginUserController = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const result = await userService.loginUserServices(email, password);
  res.status(201).send({
    success: true,
    statusCode: 201,
    message: "user logged in Successfully",
    token: result,
  });
});

export default {
  createUserController,
  loginUserController,
};
