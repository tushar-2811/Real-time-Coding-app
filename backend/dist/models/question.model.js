"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionModel = exports.questionSchema = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const models_types_1 = require("./types/models.types");
const exampleSchema = new mongoose_1.Schema({
    input: {
        type: String,
        required: true
    },
    output: {
        type: String,
        required: true
    }
});
exports.questionSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    difficulty: models_types_1.difficultyLevel,
    examples: [exampleSchema],
    images: [String]
}, { timestamps: true });
exports.QuestionModel = mongoose_1.default.models.Question || mongoose_1.default.model("Question", exports.questionSchema);
