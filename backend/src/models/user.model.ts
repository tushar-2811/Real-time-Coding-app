import mongoose , {Schema} from "mongoose";
import { User } from "./types/models.types";

const userSchema:Schema<User> = new Schema({
    userName : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },

})