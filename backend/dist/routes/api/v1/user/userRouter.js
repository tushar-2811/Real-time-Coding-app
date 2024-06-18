"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../../../../controllers/api/v1/user/userController");
const userRouter = (0, express_1.Router)();
userRouter.route('/sign-up').post(userController_1.signUpController);
userRouter.route('/sign-in').post(userController_1.signInController);
exports.default = userRouter;
