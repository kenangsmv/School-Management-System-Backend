const AysncHandler = require("express-async-handler");
const Program = require("../../model/Academic/Program");
const Subject = require("../../model/Academic/Subject");
const Admin = require("../../model/Staff/Admin");
const YearGroup = require("../../model/Academic/YearGroup");

//@desc  Create year group
//@route POST /api/v1/year-groups/
//@acess  Private

exports.createYearGroup = AysncHandler(async (req, res) => {
  const { name, academicYear } = req.body;
 
  //check if exists
  const yearGroup = await YearGroup.findOne({ name });
  if (yearGroup) {
    throw new Error("Year Group/Graducation  already exists");
  }

  //create
  const yearGroupCreate = await YearGroup.create({
    name,
    academicYear,
    createdBy: req.userAuth._id
  });

  //push to the program
  //find the admin
  const admin = await Admin.findById(req.userAuth._id);
  if (!admin) { 
    throw new Error("Admin not found");
  }

  //push year group into admin
  admin.yearGroups.push(yearGroupCreate._id);
  //save
  await admin.save();

  res.status(201).json({
    status: "success",
    message: "Year Group created successfully",
    data: yearGroupCreate,
  });
});

//@desc  get all YearGroups
//@route GET /api/v1/year-groups
//@acess  Private

exports.getYearGroups = AysncHandler(async (req, res) => {
  const groups = await YearGroup.find();
  res.status(201).json({
    status: "success",
    message: "Year Groups fetched successfully",
    data: groups,
  });
});

//@desc  get single year group
//@route GET /api/v1/year-groups/:id
//@acess  Private
exports.getSingleYearGroup = AysncHandler(async (req, res) => {
  const group = await YearGroup.findById(req.params.id);
  res.status(201).json({
    status: "success",
    message: "Year Group fetched successfully",
    data: group,
  });
});

//@desc   Update  year group
//@route  PUT /api/v1/year-groups/:id
//@acess  Private

exports.updateYearGroup = AysncHandler(async (req, res) => {
  const { name, academicYear } = req.body;
  //check name exists
  const yearGroupFound = await YearGroup.findOne({ name });
  if (yearGroupFound) {
    throw new Error("Year Group already exists");
  }
  const yearGroup = await YearGroup.findByIdAndUpdate(
    req.params.id,
    {
      name,
      academicYear,
      createdBy: req.userAuth._id,
    },
    {
      new: true,
    }
  );

  res.status(201).json({
    status: "success",
    message: "Year Group  updated successfully",
    data: yearGroup,
  });
});

//@desc   Delete  Year Group
//@route  PUT /api/v1/year-groups/:id
//@acess  Private
exports.deleteYearGroup = AysncHandler(async (req, res) => {
  await YearGroup.findByIdAndDelete(req.params.id);
  res.status(201).json({
    status: "success",
    message: "Year Group deleted successfully",
  });
});
