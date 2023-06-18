const roleRestriction = (...roles) => {
    console.log(roles);
    return (req, res, next) => {
        if (!roles.includes(req.userAuth.role)) { 
            throw new Error("You dont have permission to perform this action")
        }
        next();
    }
}

module.exports = roleRestriction;