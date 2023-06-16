const AsyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const Admin = require("../../model/Staff/Admin");
const generateToken = require("../../utils/generateToken");
const verifyToken = require("../../utils/verifyToken");
const { hashPassword, isPassMatched } = require("../../utils/helpers");

//@desc Register admin
//@router POST /api/v1/admins/register
//@access Private
exports.registerAdmCtrl = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //checking if admin exists
  const adminFound = await Admin.findOne({ email });
  if (adminFound) {
    throw new Error("Admin Exists");
  }

  //register
  const user = await Admin.create({
    name,
    email,
    password: await hashPassword(password),
  });
  res.status(201).json({
    status: "success",
    data: user,
    message: "admin registered successfully",
  });
});

//@desc Login admin
//@router POST /api/v1/admins/login
//@access Private
exports.loginAdmCtrl = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //find user
  const user = await Admin.findOne({ email });

  if (!user) {
    return res.json({ message: "Invalid login credential" });
  }
  //verify password
  const isMatched = await isPassMatched(password, user.password);

  if (!isMatched) {
    return res.json({ message: "Invalid login credential" });
  } else { 
    return res.json({
      data: generateToken(user._id),
      message: "Admin logged in successfully",
    });
  }
});

//@desc Get all admins
//@router GET /api/v1/admins/
//@access Private
exports.getAllAdmCtrl = AsyncHandler(async (req, res) => {
  const admins = await Admin.find();
  res.status(200).json({
    status: "success",
    message: "Admin fetched succesfully",
    data: admins,
  });
});

//@desc get Single admin
//@router GET /api/v1/admins/:id
//@access Private
exports.getSingleAdmProfileCtrl = AsyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.userAuth._id).select(
    "-password -createdAt"
  );

  if (!admin) {
    throw new Error("Admin not found");
  } else {
    res.status(200).json({
      satus: "succes",
      data: admin,
      message: "Admin profile fetched successfully",
    });
  }
});

//@desc Update admin
//@router PUT /api/v1/admins/:id
//@access Private
exports.updateAdmCtrl = AsyncHandler(async (req, res) => {
  const { email, name, password } = req.body;
  //if email is taken
  const emailExist = await Admin.findOne({ email });
  if (emailExist) {
    throw new Error("This email is taken/exist");
  } 

 //check if user is updating password
  if (password) {
    //update
    const admin = await Admin.findByIdAndUpdate(
      req.userAuth._id,
      {
        email,
        password: await hashPassword(password),
        name,
      },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: "succes",
      data: admin,
      message: "admin updated successfully",
    });
  } else { 
     //update
     const admin = await Admin.findByIdAndUpdate(
      req.userAuth._id,
      {
        email,
        name,
      },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: "succes",
      data: admin,
      message: "admin updated successfully",
    });
  }

   
  
});

//@desc Delete admin
//@router DELETE /api/v1/admins/:id
//@access Private
exports.deleteAdmCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Delete admin",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

//@desc Suspend Teacher
//@router PUT /api/v1/suspend/teacher/:id
//@access Private
exports.suspendAdmCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin suspend teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

//@desc Unsuspend admin
//@router PUT /api/v1/suspend/teacher/:id
//@access Private
exports.unsuspendAdmCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin unsuspend teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

//@desc Withdraw admin
//@router PUT /api/v1/withdraw/teacher/:id
//@access Private
exports.withdrawAdmCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin withdraw teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

//@desc unwithdraw admin
//@router PUT /api/v1/unwithdraw/teacher/:id
//@access Private
exports.unwithdrawAdmCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin unwithdraw teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

//@desc Publish exam results
//@router PUT /api/v1/publish/exam/:id
//@access Private
exports.publishAdmCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin publish exam results",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

//@desc Unpublish exam resluts
//@router PUT /api/v1/unpublish/exam/:id
//@access Private
exports.unpublishAdmCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin unpublish exam results",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};
