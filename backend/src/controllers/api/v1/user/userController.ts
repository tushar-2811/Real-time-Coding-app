import UserModel from "../../../../models/user.model";
import { signInSchema } from "../../../../schemas/signInSchema";
import { signUpSchema } from "../../../../schemas/signUpSchema";
import { ApiError } from "../../../../utils/ApiError";
import { AsyncHandler } from "../../../../utils/asyncHandler";
import { Request , Response } from "express";


// sign-up controller
export const signUpController = AsyncHandler(async (req: Request , res: Response) => {
      const {userName , email , password } = req.body;

      const parsedInput = signUpSchema.safeParse({
        userName , email , password
      });

      if(!parsedInput.success){
         throw new ApiError(401 , "Invalid Credentials" , parsedInput.error);
      }

      // check if email and usernames are already taken or not
      const existingUser = await UserModel.findOne({
           $or : [{email} , {userName}]
      });

      if(existingUser){
        throw new ApiError(401 , "User already exist with these credentials");
      }

      // If No user exists with 


})


// sign-in controller
export const signInController = AsyncHandler(async (req: Request , res: Response) => {
       const {email , password} = req.body;

       const parsedInput = signInSchema.safeParse(email , password);

       if(!parsedInput.success){
          throw new ApiError(400 , "Invalid Credentials" , parsedInput.error)
       }
})

// update user
export const updateUserController = AsyncHandler(async(req: Request , res: Response) => {
     
})

// delete user
export const deleteUserController = AsyncHandler(async(req: Request , res: Response) => {

})

// sign-out controller
export const signOutController = AsyncHandler(async(req: Request, res: Response) => {
  
})