import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n mongodb connected :: Db host : ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB CONNECTION FAILED" , error);
        process.exit(1);
    }
}

export default connectDB;