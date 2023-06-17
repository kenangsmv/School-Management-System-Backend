const express = require('express');
// const morgan = require('morgan');
const {globalErrorHandler, notFoundErr} = require('../middlewares/globalErrorHandler');
const adminRouter = require('../routes/staff/adminRouter');
const academicYearRouter = require('../routes/academics/academicYear');


const app = express();

// app.use(morgan("dev"));
app.use(express.json()) // pass incoming json data

//Routes
app.use("/api/v1/admins", adminRouter);
app.use("/api/v1/academic-years", academicYearRouter);

//Error middlewares
app.use(notFoundErr);
app.use(globalErrorHandler);

module.exports = app;