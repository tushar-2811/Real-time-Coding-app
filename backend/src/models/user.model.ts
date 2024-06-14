import mongoose , {Schema} from "mongoose";
import { User } from "./types/models.types";
import { questionSchema } from "./question.model";
import { boolean } from "zod";

const userSchema:Schema<User> = new Schema({
    userName : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    avatar : {
        type : String,
    },
    isVerified : {
        type : Boolean,
        default : false
    },
    verifyCode : {
        type : String,
    },
    githubUrl : {
        type : String
    },
    twitterUrl : {
        type : String
    },
    questionsSolved :  [questionSchema],
    favourites : [questionSchema],
    walletConfigured : {
        type : Boolean,
        default : false
    },
    refreshToken : {
        type : String
    }

})

const UserModel = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>("User" , userSchema);

export default UserModel;