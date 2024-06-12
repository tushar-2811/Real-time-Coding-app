import {z} from 'zod';

export const questionSchema = z.object({
    name : z.string()
            .min(1 , "Name of the question must contain atleast 1 character")
            .max(30 , "Name of the question must contain less than 30 characters"),
    content : z.string()
               .min(10 , "Please defint question in atleast 10 characters"),
    difficulty : z.enum(["Easy" , "Medium" , "Hard"]),
})

export const exampleSchema = z.object({
    input : z.string().min(1 , "Input should contain atleast one character"),
    output : z.string().min(1 , "Output should containe alteast one character")
})