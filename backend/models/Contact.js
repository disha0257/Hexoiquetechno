import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    // User Name
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },

    // Email Address
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,

      match: [
        /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook|hotmail|icloud)\.(com|in)$/,
        "Please enter a valid email address",
      ],
    },

    // Company Name
    company: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
      minlength: [2, "Company name must be at least 2 characters"],
      maxlength: [100, "Company name cannot exceed 100 characters"],
    },

    // Phone Number
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,

      match: [
        /^[0-9]{10}$/,
        "Phone number must contain exactly 10 digits",
      ],
    },

    // Project Details
    message: {
      type: String,
      required: [true, "Project details are required"],
      trim: true,
      minlength: [20, "Project details must be at least 20 characters"],
      maxlength: [2000, "Project details cannot exceed 2000 characters"],
    },

    // Contact Request Status
    status: {
      type: String,
      enum: ["New", "Contacted", "Completed"],
      default: "New",
    },
  },

  {
    timestamps: true,
  }
);

const Contact = mongoose.model(
  "Contact",
  contactSchema
);

export default Contact;