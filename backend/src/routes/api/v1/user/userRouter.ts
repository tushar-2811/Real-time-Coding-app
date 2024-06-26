import { Router } from "express";
import { signInController, signUpController, updateUserController } from "../../../../controllers/api/v1/user/userController";

const userRouter = Router();

userRouter.route('/sign-up').post(signUpController);
userRouter.route('/sign-in').post(signInController);

userRouter.route('/updateUser').put(updateUserController);

export default userRouter;