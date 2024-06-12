import mongoose , { Schema} from "mongoose";
import { Question, difficultyLevel, Example} from "./types/models.types";

const exampleSchema : Schema<Example> = new Schema({
    input : {
        type : String,
        required : true
    },
    output : {
        type : String,
        required : true
    }
})

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
    examples : [exampleSchema]

} , {timestamps : true});

export const QuestionModel = mongoose.models.Question as mongoose.Model<Question> || mongoose.model("Question" , questionSchema);

