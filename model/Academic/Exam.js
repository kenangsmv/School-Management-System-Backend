const mongoose = require("mongoose");

const { Schema } = mongoose;

//examSchema
const examSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    subject: {
      type: Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },
    program: {
      type: Schema.Types.ObjectId,
      ref: "Program",
      required: false,
    },
    passMark: {
      type: Number,
      required: true,
      default: 50,
    },
    totalMark: {
      type: Number,
      required: true,
      default: 100,
    },

    academicTerm: {
      type: Schema.Types.ObjectId,
      ref: "AcademicTerm",
      required: false,
    },
    duration: {
      type: String,
      required: true,
      default: "30 minutes",
    },
    examDate: {
      type: Date,
      required: true,
      default: new Date(),
    },
    examTime: {
      type: String,
      required: true,
    },
    examType: {
      type: String,
      required: false,
      default: "Quiz",
    },
    examStatus: {
      type: String,
      required: true,
      default: "pending",
      enum: ["pending", "live"],
    },
    questions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
    classLevel: {
      type: Schema.Types.ObjectId,
      ref: "ClassLevel",
      required: false,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Teacher",
      required: true,
    },
    academicTerm: {
      type: Schema.Types.ObjectId,
      ref: "AcademicTerm",
      required: false,
    },
    academicYear: {
      type: Schema.Types.ObjectId,
      ref: "AcademicYear",
      required: false,
    },
  },
  { timestamps: true }
);

const Exam = mongoose.model("Exam", examSchema);

module.exports = Exam;
