"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const envConfig_1 = require("./config/envConfig");
const dbConnection_1 = __importDefault(require("./db/dbConnection"));
const port = envConfig_1.env.PORT;
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
// app.listen(port , () => {
//     console.log(`Server is running on port : ${port}`);
// })
