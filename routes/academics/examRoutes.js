const express = require("express");
const isTeacher = require("../../middlewares/isTeacher");
const isTeacherLogin = require("../../middlewares/isTeacherLogin");
const {
  createExam,
  getExams,
  getExam,
  updateExam,
} = require("../../controller/academics/examsCtrl");

const examRouter = express.Router();

examRouter.route("/").post(isTeacherLogin, isTeacher, createExam).get(getExams);
examRouter
  .route("/:id")
  .get(getExam)
  .put(isTeacherLogin, isTeacher, updateExam);

module.exports = examRouter;
