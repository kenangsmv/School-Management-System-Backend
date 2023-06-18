const verifyToken = require("../utils/verifyToken");

const isAuthenticated = (model) => {
    return async (req, res, next) => {
        // get token from header
        const headerObj = req.headers;
        const token = headerObj?.authorization?.split(" ")[1];
      
        const verifiedToken = verifyToken(token);
      
        // verify token
        if (verifiedToken) {
          //find the admin
          const user = await model.findById(verifiedToken.id).select(
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
}
 
module.exports = isAuthenticated;