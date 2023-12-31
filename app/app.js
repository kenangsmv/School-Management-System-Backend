const express = require("express");
// const morgan = require('morgan');
const {
  globalErrorHandler,
  notFoundErr,
} = require("../middlewares/globalErrorHandler");
const adminRouter = require("../routes/staff/adminRouter");
const academicYearRouter = require("../routes/academics/academicYear");
const classLevelRouter = require("../routes/academics/classLevel");
const academicTermRouter = require("../routes/academics/academicTerm");
const programRouter = require("../routes/academics/program");
const subjectRouter = require("../routes/academics/subjects");
const yearGroupRouter = require("../routes/academics/yearGroup");
const teachersRouter = require("../routes/staff/teachers");
const examRouter = require("../routes/academics/examRoutes");
const meetRouter = require("../routes/academics/meetRoute");

const studentRouter = require("../routes/staff/student");
const questionsRouter = require("../routes/academics/questionRoutes");
const examResultRouter = require("../routes/academics/examResultsRoute");

const cors = require("cors");

const app = express();
app.use(cors());
// app.use(morgan("dev"));
app.use(express.json()); // pass incoming json data

//Routes
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/academic-years", academicYearRouter);
app.use("/api/v1/academic-terms", academicTermRouter);
app.use("/api/v1/class-levels", classLevelRouter);
app.use("/api/v1/programs", programRouter);
app.use("/api/v1/subjects", subjectRouter);
app.use("/api/v1/year-groups", yearGroupRouter);
app.use("/api/v1/teacher", teachersRouter);
app.use("/api/v1/exams", examRouter);
app.use("/api/v1/meets", meetRouter);
app.use("/api/v1/student", studentRouter);
app.use("/api/v1/questions", questionsRouter);
app.use("/api/v1/exam-results", examResultRouter);

//Error middlewares
app.use(notFoundErr);
app.use(globalErrorHandler);

module.exports = app;
