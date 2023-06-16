const AsyncHandler = require("express-async-handler")
const Admin = require("../../model/Staff/Admin");

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
      password,
    });
    res.status(201).json({
      status: "success",
      data: user,
    });

})

//@desc Login admin
//@router POST /api/v1/admins/login
//@access Private
exports.loginAdmCtrl = async (req, res) => {
  const { email, password } = req.body;
  try {

    //find user
    const user = await Admin.findOne({ email });

    if (!user) {
      return res.json({ message: "Invalid login credential ASDAS" });
      }
    if (user && user.verifyPassword(password)) {
          return res.json({ data: user });
    } else { 
          return res.json({message: "Invalid login credential"})
    }
      
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

//@desc Get all admins
//@router GET /api/v1/admins/
//@access Private
exports.getAllAdmCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "All admins",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

//@desc get Single admin
//@router GET /api/v1/admins/:id
//@access Private
exports.getSingleAdmCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Single admin",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

//@desc Update admin
//@router PUT /api/v1/admins/:id
//@access Private
exports.updateAdmCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Update admin",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

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
