import dotenv from 'dotenv'
import app from './app';
import connectDB from './db/dbConnection';


dotenv.config({
    path : './env'
})


const port = process.env.PORT || 8000;


connectDB()
.then(() => {
    app.listen(port , () => {
        console.log(`Server is running on port : ${port}`);
    })
})
.catch((error) => {
    console.log(`Error while connecting to db : ${error}`);
    throw error;
})