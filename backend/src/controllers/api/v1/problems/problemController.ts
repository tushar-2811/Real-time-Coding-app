import { Request , Response } from "express";
import { AsyncHandler } from "../../../../utils/AsyncHandler";


// add new problem
export const addProblemController = AsyncHandler(async(req: Request , res: Response) => {

});

// delete problem by Id
export const removeProblemController = AsyncHandler((async(req: Request , res: Response) => {

}));

// get all problems 
export const getAllProblemController = AsyncHandler(async(req: Request , res: Response) => {
    
})

// get particular problem by Id
export const getProblemWithIdController = AsyncHandler(async(req: Request , res: Response) => {

})

// update the existing problem | Edit the problem
export const updateProblemWithIdController = AsyncHandler(async(req: Request , res: Response) => {

})

// submit a problem
export const submitProblemController = AsyncHandler(async(req: Request , res: Response) => {
    
})