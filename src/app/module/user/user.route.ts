import express from "express";
import userController from "./user.controller";
import validateRequest from "../../middleware/validateRequest";
import createUserValidtionSchema from "./user.zod";
const router = express.Router();

router
  .route("/create")
  .post(
    validateRequest(createUserValidtionSchema),
    userController.createUserController
  );
router.route("/login").post(userController.loginUserController);

export const userRoute = router;
