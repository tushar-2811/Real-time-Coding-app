"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInSchema = void 0;
const zod_1 = require("zod");
exports.signInSchema = zod_1.z.object({
    identifier: zod_1.z.string(),
    password: zod_1.z.string().min(6, "password must be of atleast 6 characters")
});
