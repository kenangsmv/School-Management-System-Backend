const express = require("express");
const {
  createQuestion,
  getQuestions,
  getQuestion,
  updateQuestion,
} = require("../../controller/academics/questionsCtrl");
const isTeacher = require("../../middlewares/isTeacher");
const isTeacherLogin = require("../../middlewares/isTeacherLogin");

const questionsRouter = express.Router();

questionsRouter.get("/", getQuestions);
questionsRouter.post("/:examID", isTeacherLogin, isTeacher, createQuestion);
// questionsRouter.post("/:examID", createQuestion);

questionsRouter.get("/:id", getQuestion);
questionsRouter.put("/:id", isTeacherLogin, isTeacher, updateQuestion);

module.exports = questionsRouter;
