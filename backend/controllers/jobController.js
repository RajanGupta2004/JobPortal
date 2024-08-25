import jobModel from "../models/jobSchema.js";



export const postJob = async (req, res) => {

    try {


        const { title, description, requirement, salary, location, jobType, experience, position, company, companyId } = req.body

        const userId = req.id
        console.log("userId", userId)

        // console.log(title, description, requirement, salary, location, jobType, experience, position, companyId)



        if (!title || !description || !requirement || !salary || !location || !jobType || !experience || !position || !companyId) {

            return res.status(400).json({
                success: false,
                message: "All filed are required..."
            })

        }

        // craeate job

        const job = await jobModel.create({
            title,
            description,
            requirement: requirement.split(","),
            salary: Number(salary),
            jobType,
            location,
            experience: experience,
            position,
            company: companyId,
            created_by: userId
        })

        if (!job) {
            return res.status(400).json({
                success: false,
                message: "Job is not created something went wrong..."
            })
        }


        return res.status(201).json({
            success: true,
            job,
            message: "Job created successfully..."
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "Something went wrong..."
        })

    }

}



export const getAdminJobs = async (req, res) => {
    try {


        const adminId = req.id

        const jobs = await jobModel.find({ created_by: adminId }).populate({ path: "company" })

        if (!jobs) {
            return res.status(404).json({
                success: false,
                message: "Job not found"
            })
        }


        return res.status(200).json({
            success: true,
            jobs
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "Something went wrong...."
        })

    }
}



// student k liye

export const getAllJobs = async (req, res) => {
    try {

        const keyword = req.query.keyword || ""
        // console.log("Keyword", keyword)

        const query = {
            $or: [
                { title: { $regex: keyword, $options: `i` } },
                { description: { $regex: keyword, $options: "i" } }
            ]

        }

        const jobs = await jobModel.find(query).populate({ path: "company" }).sort({ createdAt: -1 });


        if (!jobs) {
            return res.status(404).json({
                success: false,
                message: "Job not found..."
            })
        }


        return res.status(200).json({
            success: false,
            jobs
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "Something went wrong...."
        })

    }
}



// student get job by id
export const getJobById = async (req, res) => {
    try {

        const jobId = req.params.id


        const job = await jobModel.findById(jobId).populate({ path: "company" })

        if (!job) {
            return res.status(404).json({
                success: false,
                message: "Job Not found by this id"
            })
        }


        return res.status(200).json({
            success: true,
            job
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "Something went wrong...."
        })

    }
}