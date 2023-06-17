const express = require("express");

const { registerAdminCtrl, loginAdminCtrl, getAllAdminCtrl, getSingleAdminProfileCtrl, updateAdminCtrl, deleteAdminCtrl, suspendAdminCtrl, unsuspendAdminCtrl, withdrawAdminCtrl, unwithdrawAdminCtrl, publishAdminCtrl, unpublishAdminCtrl } = require("../../controller/staff/adminCtrl");
const isLogin = require("../../middlewares/isLogin");
const isAdmin = require("../../middlewares/isAdmin");


const adminRouter = express.Router();

//admin register
adminRouter.post("/register", registerAdminCtrl);

//adming login
adminRouter.post("/login", loginAdminCtrl);

//get all admins
adminRouter.get("/",isLogin, getAllAdminCtrl);

//get single admin
adminRouter.get("/profile", isLogin, isAdmin, getSingleAdminProfileCtrl);

//update
adminRouter.put("/", isLogin, isAdmin, updateAdminCtrl)

//delete Admin
adminRouter.delete("/:id", deleteAdminCtrl)

//admin suspend teacher
adminRouter.put("/suspend/teacher/:id", suspendAdminCtrl)

//admin unsuspend teacher
adminRouter.put("/unsuspend/teacher/:id", unsuspendAdminCtrl)

//admin withdrawing teacher
adminRouter.put("/withdraw/teacher/:id", withdrawAdminCtrl)

//admin unwithdrawing teacher
adminRouter.put("/unwithdraw/teacher/:id", unwithdrawAdminCtrl)

//admin publish exam results
adminRouter.put("/publish/exam/:id", publishAdminCtrl)


//admin Unpublish exam results
adminRouter.put("/unpublish/exam/:id", unpublishAdminCtrl)

module.exports = adminRouter;
