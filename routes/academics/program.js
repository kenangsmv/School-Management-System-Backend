const express = require("express");
const {
  createProgram,
  deleteProgram,
  getProgram,
  getPrograms,
  updateProgram,
  addSubjectToProgram,
} = require("../../controller/academics/programs");
const isAdmin = require("../../middlewares/isAdmin");
const isLogin = require("../../middlewares/isLogin");

const programRouter = express.Router();

// academicTerRouter.post("/", isLogin, isAdmin, createAcademicYear);
// academicTerRouter.get("/", isLogin, isAdmin, getAcademicYears);

//admin Only
// programRouter
//   .route("/")
//   .post(isLogin, isAdmin, createProgram)
//   .get(isLogin, isAdmin, getPrograms);

programRouter
  .route("/")
  .post(isLogin, isAdmin, createProgram)
  .get(isLogin, getPrograms);

programRouter
  .route("/:id")
  .get(isLogin, isAdmin, getProgram)
  .put(isLogin, isAdmin, updateProgram)
  .delete(isLogin, isAdmin, deleteProgram);

programRouter.put("/:id/subjects", isLogin, isAdmin, addSubjectToProgram);

// academicTerRouter.get("/:id", isLogin, isAdmin, getAcademicYear);
// academicTerRouter.put("/:id", isLogin, isAdmin, updateAcademicYear);
// academicTerRouter.delete("/:id", isLogin, isAdmin, deleteAcademicYear);

module.exports = programRouter;
