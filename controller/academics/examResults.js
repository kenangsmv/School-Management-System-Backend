const AsyncHandler = require("express-async-handler");
const ExamResult = require("../../model/Academic/ExamResults");
const Student = require("../../model/Academic/Student");

//@desc  Exam results checking
//@route POST /api/v1/exams-results/:id/checking
//@acess Private  - Student Only

exports.checkExamResults = AsyncHandler(async (req, res) => {
  //finding student
  const studentFound = await Student.findById(req.userAuth?._id);

  if (!studentFound) {
    throw new Error("No student Found");
  }

  //finding the exam results
  const examResult = await ExamResult.findOne({
    studentID: studentFound?.studentId,
    _id: req.params.id
  }).populate({
    path: "exam", populate: {
    path:"questions"
  } }).populate("classLevel").populate("academicTerm").populate("academicYear");

  //check if exam published
  if (examResult?.isPublished === false) {
    throw new Error("Exam result is not available, check out later");
  }
  res.json({
    status: "success",
    message: "Exam result",
    data: examResult,
    student: studentFound
  });
});

//@desc  Get All Exam Results (name,id)
//@route POST /api/v1/exams-results/:id/checking
//@acess Private  - Student Only

exports.getAllExamResults = AsyncHandler(async (req, res) => {
  const results = await ExamResult.find().select("exam").populate("exam");
  res.status(200).json({
    stauts: "success",
    message: "Exam Results fetched succesfully",
    data: results,
  });
});
