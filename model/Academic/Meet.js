const mongoose = require("mongoose");

const { Schema } = mongoose;

//examSchema
const meetSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    subject: {
      type: Schema.Types.ObjectId,
      ref: "Subject",
      required: false,
    },
    program: {
      type: Schema.Types.ObjectId,
      ref: "Program",
      required: false,
    },
    academicTerm: {
      type: Schema.Types.ObjectId,
      ref: "AcademicTerm",
      required: false,
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Teacher",
      required: true,
    },
  },
  { timestamps: true }
);

const Meet = mongoose.model("Meet", meetSchema);

module.exports = Meet;
