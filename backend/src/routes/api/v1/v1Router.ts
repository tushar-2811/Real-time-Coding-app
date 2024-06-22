import { Router } from "express";
import userRouter from "./user/userRouter";
import problemRouter from "./problems/problemRouter";

const v1Router = Router();

v1Router.use('/user' , userRouter);
v1Router.use('/problem' , problemRouter);

export default v1Router;