const AsyncHandler = require("express-async-handler");
const AcademicYear = require("../../model/Academic/AcademicYear");
const Admin = require("../../model/Staff/Admin");

//@desc Create Academic Year
//@router POST /api/v1/admins/academic-years
//@access Private
exports.createAcademicYear = AsyncHandler(async (req, res) => {
  const { name, fromYear, toYear, createdBy } = req.body;

  //check if exists
  const academicYear = await AcademicYear.findOne({ name });
  if (academicYear) {
    throw new Error("Academic year alreadt exists");
  }

  //create
  const academicYearCreated = await AcademicYear.create({
    name,
    fromYear,
    toYear,
    createdBy: req.userAuth._id,
  });
  //push academic into admin
  const admin = await Admin.findById(req.userAuth._id);
  admin.academicYears.push(academicYearCreated._id);
  await admin.save();
  res.status(201).json({
    status: "succes",
    message: "Academic year created succesfuly",
    data: academicYearCreated,
  });
});

//@desc Get All Academic Year
//@router POST /api/v1/admins/academic-years
//@access Private
exports.getAcademicYears = AsyncHandler(async (req, res) => {
  //check if exists
  const academicYears = await AcademicYear.find();

  res.status(201).json({
    status: "succes",
    message: "Academic years fetched succesfully",
    data: academicYears,
  });
});

//@desc Get single Academic Year
//@router POST /api/v1/admins/academic-years/:id
//@access Private
exports.getSingleAcademicYear = AsyncHandler(async (req, res) => {
  //check if exists
  const academicYears = await AcademicYear.findById(req.params.id);

  res.status(201).json({
    status: "succes",
    message: "Academic year fetched succesfully",
    data: academicYears,
  });
});

//@desc Update Academic Year
//@router POST /api/v1/admins/academic-years/:id
//@access Private
exports.updateAcademicYear = AsyncHandler(async (req, res) => {
  const { name, fromYear, toYear } = req.body;

  //check if name exist
  const createAcademicYearFound = await AcademicYear.findOne({ name });
  if (createAcademicYearFound) { 
    throw new Error("Academic year already exists");
  }

  const academicYear = await AcademicYear.findByIdAndUpdate(
    req.params.id,
    { name, fromYear, toYear, createdBy: req.userAuth._id },
    { new: true }
  );

  res.status(201).json({
    status: "succes",
    message: "Academic year updated succesfully",
    data: academicYear,
  });
});

//@desc   Update  Academic Year
//@route  PUT /api/v1/academic-years/:id
//@acess  Private
exports.deleteAcademicYear = AsyncHandler(async (req, res) => {
  await AcademicYear.findByIdAndDelete(req.params.id);

  res.status(201).json({
    status: "success",
    message: "Academic year deleted successfully",
  });
});
