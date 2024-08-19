import mongoose from "mongoose";



const applicationSchema = new mongoose.Schema({
    job: { type: mongoose.Schema.Types.ObjectId, required: true },
    applicant: { type: mongoose.Schema.Types.ObjectId, required: true },
    status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" },

}, { timestamps: true })



const applicationModel = mongoose.model(applicationSchema, "applicationModel")


export default applicationModel