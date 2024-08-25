import mongoose from "mongoose";


const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    requirement: [{ type: String }],  // skills li requirement
    salary: { type: Number, required: true },
    experience: { type: Number, required: true },
    location: { type: String, required: true },
    jobType: { type: String, required: true },
    position: { type: Number, required: true },
    company: { type: mongoose.Schema.Types.ObjectId, ref: "company", },
    created_by: {
        type: mongoose.Schema.Types.ObjectId, ref: "user", required: true
    },

    applications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "applicationModel"
    }]


}, { timestamps: true })



const jobModel = mongoose.model("Job", jobSchema)


export default jobModel
