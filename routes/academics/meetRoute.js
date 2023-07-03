const express = require("express");
const isTeacher = require("../../middlewares/isTeacher");
const isTeacherLogin = require("../../middlewares/isTeacherLogin");
const {
  createMeet,
  getMeets,
  getMeet,
} = require("../../controller/academics/meetCtrl");

const meetRouter = express.Router();

meetRouter.route("/").post(isTeacherLogin, isTeacher, createMeet).get(getMeets);
meetRouter.route("/:id").get(getMeet);

module.exports = meetRouter;
