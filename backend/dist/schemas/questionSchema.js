"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleSchema = exports.questionSchema = void 0;
const zod_1 = require("zod");
exports.questionSchema = zod_1.z.object({
    name: zod_1.z.string()
        .min(1, "Name of the question must contain atleast 1 character")
        .max(30, "Name of the question must contain less than 30 characters"),
    content: zod_1.z.string()
        .min(10, "Please defint question in atleast 10 characters"),
    difficulty: zod_1.z.enum(["Easy", "Medium", "Hard"]),
});
exports.exampleSchema = zod_1.z.object({
    input: zod_1.z.string().min(1, "Input should contain atleast one character"),
    output: zod_1.z.string().min(1, "Output should containe alteast one character")
});
