import { Router } from "express";
import v1Router from "./api/v1/v1Router";

const indexRouter = Router();

indexRouter.use('/api' , v1Router);


export default indexRouter;