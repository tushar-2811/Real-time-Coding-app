import { Document } from 'mongoose';

export enum difficultyLevel {
    Easy,
    Medium,
    Hard
}

export type Example = {
    input : string;
    output : string;
}

export interface Question extends Document{
     name : string;
     content : string;
     difficulty : difficultyLevel
     examples ?: Example[]
     
}

export interface User extends Document{
    userName : string;
    email : string;
    password : string;
    avatar ?: string;
    isVerified : boolean;
    verifyCode : string;
    githubUrl ?: string;
    twitterUrl ?: string;
    refreshToken : string;
    questionsSolved :  Question[];
    favourites : Question[]
}

