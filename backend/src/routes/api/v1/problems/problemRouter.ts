import { Router } from "express";
import { addProblemController, getAllProblemController, getProblemWithIdController, removeProblemController, updateProblemWithIdController } from "../../../../controllers/api/v1/problems/problemController";

const problemRouter = Router();

// add new problem
problemRouter.route('/addProblem').post(addProblemController);

// delete the existing problem
problemRouter.route('/deleteProblem/:problemId').delete(removeProblemController);

// fetch all the problems
problemRouter.route('/getAllProblems').get(getAllProblemController);

// get problem by Id
problemRouter.route('/getProblem/:problemId').get(getProblemWithIdController);

// Update existing problem by Id
problemRouter.route('/updateProblem/:problemId').put(updateProblemWithIdController);



export default problemRouter;