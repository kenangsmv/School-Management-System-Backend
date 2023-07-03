const express = require("express");
const {
  createSubject,
  deleteSubject,
  getSubject,
  getSubjects,
  updatSubject,
  getSubjectsForTeacher,
  addStudentToSubject,
} = require("../../controller/academics/subjects");

const isAdmin = require("../../middlewares/isAdmin");
const isLogin = require("../../middlewares/isLogin");
const isTeacher = require("../../middlewares/isTeacher");
const isTeacherLogin = require("../../middlewares/isTeacherLogin");

const subjectRouter = express.Router();

subjectRouter.post("/:programID", isLogin, isAdmin, createSubject);

subjectRouter.get("/", getSubjects);
subjectRouter.get(
  "/realatedsubject",
  isTeacherLogin,
  isTeacher,
  getSubjectsForTeacher
);

subjectRouter.get(
  "/:id",
  (req, res, next) => {
    if (req.session.isLogin || req.session.isTeacherLogin) {
      next();
    } else {
      res.status(403).send("Not authorized");
    }
  },
  getSubject
);

subjectRouter.put("/:id", isLogin, isAdmin, updatSubject);
subjectRouter.delete("/:id", isLogin, isAdmin, deleteSubject);
subjectRouter.post("/:id/student", addStudentToSubject);

module.exports = subjectRouter;
