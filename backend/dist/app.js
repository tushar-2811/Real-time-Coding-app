"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const _indexRouter_1 = __importDefault(require("./routes/ indexRouter"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express_1.default.json({
    limit: "16kb"
}));
app.use(express_1.default.urlencoded({
    extended: true,
    limit: "16kb"
}));
app.use((0, cookie_parser_1.default)());
app.use('/', _indexRouter_1.default);
exports.default = app;
