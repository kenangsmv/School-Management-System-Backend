const AysncHandler = require("express-async-handler");
const Meet = require("../../model/Academic/Meet");
const Teacher = require("../../model/Staff/Teacher");

//@desc  Create Exam
//@route POST /api/v1/exams
//@acess Private  Teachers only

exports.createMeet = AysncHandler(async (req, res) => {
  const { name, createdBy } = req.body;
  // const { name, subject, createdBy } = req.body;

  //find teacher
  const teacherFound = await Teacher.findById(req.userAuth?._id);
  if (!teacherFound) {
    throw new Error("Teacher not found");
  }
  //exam exists                           name, subject
  const meetExists = await Meet.findOne({ name });
  if (meetExists) {
    throw new Error("Exam already exists");
  }
  //create
  const meetCreated = new Meet({
    name,
    // createdBy,
    // subject,
    createdBy: req.userAuth?._id,
  });
  //push the exam into teacher
  teacherFound?.meetCreated?.push(meetCreated?._id);
  //save exam
  await meetCreated.save();
  await teacherFound.save();
  res.status(201).json({
    status: "success",
    message: "Meet created",
    data: meetCreated,
  });
});

//@desc  get all exams
//@route GET /api/v1/exams
//@acess  Private

exports.getMeets = AysncHandler(async (req, res) => {
  const meet = await Meet.find().populate({});
  res.status(201).json({
    status: "success",
    message: "Exams fetched successfully",
    data: meet,
  });
});

//@desc  get single exam
//@route GET /api/v1/exams/:id
//@acess  Private
exports.getMeet = AysncHandler(async (req, res) => {
  const meet = await Meet.findById(req.params.id);
  res.status(201).json({
    status: "success",
    message: "Exam fetched successfully",
    data: meet,
  });
});
