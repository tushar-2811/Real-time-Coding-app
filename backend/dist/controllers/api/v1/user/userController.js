"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInController = exports.signUpController = void 0;
const user_model_1 = __importDefault(require("../../../../models/user.model"));
const signUpSchema_1 = require("../../../../schemas/signUpSchema");
const ApiError_1 = require("../../../../utils/ApiError");
const AsyncHandler_1 = require("../../../../utils/AsyncHandler");
// sign-up controller
exports.signUpController = (0, AsyncHandler_1.AsyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, email, password } = req.body;
    const parsedInput = signUpSchema_1.signUpSchema.safeParse({
        userName, email, password
    });
    if (!parsedInput.success) {
        throw new ApiError_1.ApiError(401, "Invalid Credentials", parsedInput.error);
    }
    // check if email and usernames are already taken or not
    const existingUser = yield user_model_1.default.findOne({
        $or: [{ email }, { userName }]
    });
    if (existingUser) {
        throw new ApiError_1.ApiError(401, "User already exist with these credentials");
    }
    // If No user exists with 
}));
// sign-in controller
exports.signInController = (0, AsyncHandler_1.AsyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
