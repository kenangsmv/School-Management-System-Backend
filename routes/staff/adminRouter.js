const express = require("express");

const {registerAdmCtrl , loginAdmCtrl, getAllAdmCtrl, getSingleAdmCtrl, updateAdmCtrl, deleteAdmCtrl, suspendAdmCtrl, unsuspendAdmCtrl, withdrawAdmCtrl, unwithdrawAdmCtrl, publishAdmCtrl, unpublishAdmCtrl}  = require("../../controller/staff/adminCtrl");

const adminRouter = express.Router();

//admin register
adminRouter.post("/register", registerAdmCtrl);

//adming login
adminRouter.post("/login", loginAdmCtrl);

//get all admins
adminRouter.get("/", getAllAdmCtrl);

//get single admin
adminRouter.get("/:id", getSingleAdmCtrl);

//update
adminRouter.put("/:id", updateAdmCtrl)

//delete Admin
adminRouter.delete("/:id", deleteAdmCtrl)

//admin suspend teacher
adminRouter.put("/suspend/teacher/:id", suspendAdmCtrl)

//admin unsuspend teacher
adminRouter.put("/unsuspend/teacher/:id", unsuspendAdmCtrl)

//admin withdrawing teacher
adminRouter.put("/withdraw/teacher/:id", withdrawAdmCtrl)

//admin unwithdrawing teacher
adminRouter.put("/unwithdraw/teacher/:id", unwithdrawAdmCtrl)

//admin publish exam results
adminRouter.put("/publish/exam/:id", publishAdmCtrl)


//admin Unpublish exam results
adminRouter.put("/unpublish/exam/:id", unpublishAdmCtrl)

module.exports = adminRouter;
