import { Router } from "express";
import userRouter from "./user/userRouter";
import problemRouter from "./problems/problemRouter";

const v1Router = Router();

v1Router.use('/user' , userRouter);
v1Router.use('/problem' , problemRouter);

v1Router.route('/test').get((req , res) => {
    return res.json({
        ok : true,
        msg : "API working fine"
    })
})

export default v1Router;