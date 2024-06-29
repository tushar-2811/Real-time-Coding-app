import { Router } from "express";
import { deleteUserController, signInController, signOutController, signUpController, updateUserController } from "../../../../controllers/api/v1/user/userController";

const userRouter = Router();

userRouter.route('/sign-up').post(signUpController);
userRouter.route('/sign-in').post(signInController);

userRouter.route('/updateUser').put(updateUserController);
userRouter.route('/deleteUser').delete(deleteUserController);

userRouter.route('/sign-out').post(signOutController);

export default userRouter;