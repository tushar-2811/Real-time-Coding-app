import express , {Express} from 'express';
import cors from 'cors';
import indexRouter from './routes/ indexRouter';
import cookieParser from 'cookie-parser';

const app: Express = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}));

app.use(express.json({
    limit : "16kb"
}));

app.use(express.urlencoded({
    extended : true,
    limit : "16kb"
}))

app.use(cookieParser());



app.use('/' , indexRouter);






export default app;