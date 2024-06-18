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
const mongoose_1 = __importDefault(require("mongoose"));
const constants_1 = require("../constants");
const envConfig_1 = require("../config/envConfig");
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connectionInstance = yield mongoose_1.default.connect(`${envConfig_1.env.MONGODB_URI}/${constants_1.DB_NAME}`);
        console.log(`\n mongodb connected :: Db host : ${connectionInstance.connection.host}`);
    }
    catch (error) {
        console.log("MONGODB CONNECTION FAILED", error);
        process.exit(1);
    }
});
exports.default = connectDB;
