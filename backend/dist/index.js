"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const dbConnection_1 = __importDefault(require("./db/dbConnection"));
dotenv_1.default.config({
    path: './env'
});
const port = process.env.PORT || 8000;
(0, dbConnection_1.default)()
    .then(() => {
    app_1.default.listen(port, () => {
        console.log(`Server is running on port : ${port}`);
    });
})
    .catch((error) => {
    console.log(`Error while connecting to db : ${error}`);
    throw error;
});
