"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config({
    path: './env'
});
const app = (0, express_1.default)();
const port = process.env.PORT;
app.listen(port, () => {
    console.log("server is running on port :", port);
});
