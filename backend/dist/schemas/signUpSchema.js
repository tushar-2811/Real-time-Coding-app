"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpSchema = void 0;
const zod_1 = require("zod");
exports.signUpSchema = zod_1.z.object({
    userName: zod_1.z.string()
        .min(3, "username must be of atleast 2 characters")
        .max(20, "username must be no more than 20 characters"),
    email: zod_1.z.string().email({ message: "Invalid Email Address" }),
    password: zod_1.z.string().min(6, "Password must contain alteast 6 characters")
});
