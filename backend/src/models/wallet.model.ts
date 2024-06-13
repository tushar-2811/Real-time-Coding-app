import mongoose, {Schema} from "mongoose";
import { Wallet } from "./types/models.types";

const walletSchema:Schema<Wallet> = new Schema({
    amount : {
        type : Number,
        default : 100
    },

} , {timestamps : true})