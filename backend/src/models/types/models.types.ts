import { Document } from 'mongoose';

export interface User extends Document{
    userName : string;
    email : string;
    password : string;
    avatar ?: string;
    isVerified : boolean;
    verifyCode : string;
    verifyCodeExpiry : Date;
    githubUrl ?: string;
    twitterUrl ?: string;
}

