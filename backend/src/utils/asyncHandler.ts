import { Request , Response , NextFunction } from "express";

const asyncHandler = (requestHandler : any) => {
    return async (req: Request , res: Response , next: NextFunction) => {
        try {
            await requestHandler(req , res , next);
        } catch (error : any) {
            res.status(error.code ||  500).json({
                success : false,
                message : error.message
            })
        }
    }
}

export {asyncHandler};