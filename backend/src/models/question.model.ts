import mongoose , {Mongoose, Schema} from "mongoose";
import { Question, difficultyLevel } from "./types/models.types";

export const questionSchema: Schema<Question> = new Schema({
    name : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    difficulty : difficultyLevel,


} , {timestamps : true});

export const QuestionModel = mongoose.models.Question as mongoose.Model<Question> || mongoose.model("Question" , questionSchema);

