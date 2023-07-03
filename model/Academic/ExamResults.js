const mongoose = require("mongoose");

const { Schema } = mongoose;

//exam result schema
const examResultSchema = new Schema(
  {
    studentID: {
      type: String,
      required: true,
    },
    exam: {
      type: Schema.Types.ObjectId,
      ref: "Exam",
      required: true,
    },
    grade: {
      type: Number,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    passMark: {
      type: Number,
      required: true,
      default: 50,
    },
    answeredQuestions: [
      {
        type: Object,
      },
    ],
    //failed/Passed
    status: {
      type: String,
      required: true,
      enum: ["Pass", "Fail"],
      default: "Fail",
    },
    //letter Notes
    remarks: {
      type: String,
      required: true,
      enum: ["AA", "BA", "BB", "CC", "FF"],
      default: "CC",
    },
    // position: {
    //   type: Number,
    //   required: true,
    // },

    // subject: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Subject",
    // },
    classLevel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ClassLevel",
    },
    academicTerm: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AcademicTerm",
      required: false,
    },
    academicYear: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AcademicYear",
      required: false,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const ExamResult = mongoose.model("ExamResult", examResultSchema);

module.exports = ExamResult;
