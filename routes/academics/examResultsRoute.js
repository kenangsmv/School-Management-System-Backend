const express = require("express");
const { checkExamResults, getAllExamResults, adminUpdateExamResult } = require("../../controller/academics/examResults");
const isStudent = require("../../middlewares/isStudent");
const isStudentLogin = require("../../middlewares/isStudentLogin");
const isAdmin = require("../../middlewares/isAdmin");
const isLogin = require("../../middlewares/isLogin");

const examResultRouter = express.Router();

examResultRouter.get("/:id/checking",isStudentLogin, isStudent, checkExamResults);
examResultRouter.get("/", isStudentLogin, isStudent, getAllExamResults);
examResultRouter.put("/:id/admin-udpdate-result",isLogin, isAdmin, adminUpdateExamResult);



module.exports = examResultRouter;