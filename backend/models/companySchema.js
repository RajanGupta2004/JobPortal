import mongoose from "mongoose";



const companySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    website: { type: String },
    location: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "userModel", required: true }

}, { timestamps: true })


const companyModel = mongoose.model("company", companySchema)

export default companyModel