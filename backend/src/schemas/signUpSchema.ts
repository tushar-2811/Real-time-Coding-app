import {z} from 'zod';

export const signUpSchema = z.object({
    userName : z.string()
                .min(3 , "username must be of atleast 2 characters")
                .max(20 , "username must be no more than 20 characters"),
    email : z.string().email({message : "Invalid Email Address"}),
    password : z.string().min(6 , "Password must contain alteast 6 characters")
})