import { Router } from "express";
import { addProblemController, getAllProblemController, getProblemWithIdController, removeProblemController } from "../../../../controllers/api/v1/problems/problemController";

const problemRouter = Router();

problemRouter.route('/addProblem').post(addProblemController);
problemRouter.route('/deleteProblem').delete(removeProblemController);
problemRouter.route('/allProblems').get(getAllProblemController);
problemRouter.route('/getProblem').get(getProblemWithIdController)



export default problemRouter;