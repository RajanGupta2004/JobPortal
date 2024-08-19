import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["student", "recurter"], default: "student", required: true },
    profile: {
        bio: { type: String },
        skills: [{ type: String }],
        resume: { type: String },// resume to url file
        resumeOriginalName: { type: String },
        company: { type: mongoose.Schema.Types.ObjectId, ref: "company" },
        profilePhoto: { type: String, default: "" }
    }

}, { timestamps: true })



const userModel = mongoose.model("user", userSchema)


export default userModel