import mongoose, {Schema} from "mongoose";
import { Wallet } from "./types/models.types";

const walletSchema:Schema<Wallet> = new Schema({
    amount : {
        type : Number,
        default : 100
    },
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    passCode : {
        type : String,
        required : true
    }

} , {timestamps : true})

export const walletModel = mongoose.models.Wallet as mongoose.Model<Wallet> || mongoose.model("Wallet" , walletSchema);