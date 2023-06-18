const express = require("express");
const { checkExamResults, getAllExamResults } = require("../../controller/academics/examResults");
const isStudent = require("../../middlewares/isStudent");
const isStudentLogin = require("../../middlewares/isStudentLogin");


const examResultRouter = express.Router();

examResultRouter.get("/:id/checking",isStudentLogin, isStudent, checkExamResults);
examResultRouter.get("/",isStudentLogin, isStudent, getAllExamResults);


module.exports = examResultRouter;