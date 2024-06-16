import { Router } from "express";
import { signInController, signUpController } from "../../../../controllers/api/v1/user/userController";

const userRouter = Router();

userRouter.route('/sign-up').post(signUpController);
userRouter.route('/sign-in').post(signInController);

export default userRouter;