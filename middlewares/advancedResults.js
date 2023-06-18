//model,

const advancedResults = (model, populate) => {
  return async (req, res, next) => {
    // const page = Number(req.query.page) || 1;
    // const limit = Number(req.query.limit) || 3
    // const skip = (page - 1) * limit;
    console.log(req.res);
    // //get total records
    const total = await model.countDocuments();
    let teachersQuery = model.find();

    //populate
    if (populate) {
        teachersQuery = teachersQuery.populate(populate);
    }

    //searching and filtering teachers

    if (req.query.name) {
      teachersQuery = teachersQuery.find({
        name: { $regex: req.query.name, $options: "i" },
      });
    }
    const teachers = await teachersQuery.find(); //.skip(skip) and .limit(limit) if paginatian will be added

    res.results = {
      total,
      results: teachers.length,
      status: "success",
      message: "Teachers fetched successfully",
      data: teachers,
    };
    next();
  };
};

module.exports = advancedResults;
