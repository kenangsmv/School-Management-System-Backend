const Admin = require("../model/Staff/Admin");
const verifyToken = require("../utils/verifyToken");

const isLogin = async (req, res, next) => {
  // get token from header
  const headerObj = req.headers;
  const token = headerObj?.authorization?.split(" ")[1];

  const verifiedToken = verifyToken(token);

  // verify token
  if (verifiedToken) {
    //find the admin
    const user = await Admin.findById(verifiedToken.id).select(
      "name email role"
    );
    // save the user into request object;
    req.userAuth = user;
    next();
  } else {
    const err = new Error("Token expired/invalid");
    next(err);
  }
};

module.exports = isLogin;
