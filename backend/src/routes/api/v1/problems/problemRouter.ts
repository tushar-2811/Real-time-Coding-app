import { Router } from "express";
import { addProblemController, getAllProblemController, getProblemWithIdController, removeProblemController } from "../../../../controllers/api/v1/problems/problemController";

const problemRouter = Router();

problemRouter.route('/addProblem').post(addProblemController);
problemRouter.route('/deleteProblem/:problemId').delete(removeProblemController);
problemRouter.route('/getAllProblems').get(getAllProblemController);
problemRouter.route('/getProblem/:problemId').get(getProblemWithIdController)



export default problemRouter;