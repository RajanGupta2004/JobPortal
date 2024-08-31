import applicationModel from "../models/applicationSchema.js";
import jobModel from "../models/jobSchema.js";




export const applyJob = async (req, res) => {
    try {

        const userId = req.id;
        const jobId = req.params.id;
        // console.log("userId and jobId", userId, jobId)

        if (!jobId) {
            return res.status(404).json({
                success: false,
                message: "Job id is required"
            })
        }

        // check the user already applied on job or not

        const existingApplication = await applicationModel.findOne({ job: jobId, applicant: userId })

        if (existingApplication) {
            return res.status(400).json({
                success: false,
                message: "You already applied for this job.."
            })
        }


        // check job exist or not 

        const job = await jobModel.findById(jobId)

        if (!job) {
            return res.status(404).json({
                success: false,
                message: "Job Not found...."
            })
        }


        // create new application
        const newApplicant = await applicationModel.create({
            job: jobId,
            applicant: userId
        })

        job.applications.push(newApplicant._id)
        await job.save()

        return res.status(200).json(
            {
                success: true,
                message: "apply job successfull"
            }
        )


    } catch (error) {
        console.log("APPLY JOB ERROR", error)
        return res.status(400).json({
            success: false,
            message: "Something went wrong..."
        })

    }
}


export const getAppliedJobs = async (req, res) => {

    try {

        const userId = req.id
        console.log("UserId", userId)
        const job = await applicationModel.find({ applicant: userId }).populate({
            path: "job",
            populate: {
                path: "company"

            }
        })

        if (!job) {
            return res.status(404).json({
                success: false,
                message: "Job Not found"
            })
        }

        return res.status(200).json({
            success: true,
            job
        })



    } catch (error) {
        console.log("get ALL Applied job", error)
        return res.status(400).json({
            success: false,
            message: "Something went wrong..."
        })

    }

}

// admin dekhega kitna user ne apply kiya hai

export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await jobModel.findById(jobId).populate({
            path: 'applications',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'applicant'
            }
        });
        if (!job) {
            return res.status(404).json({
                message: 'Job not found.',
                success: false
            })
        };
        return res.status(200).json({
            job,
            succees: true
        });
    } catch (error) {
        console.log(error);
    }
}


export const updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const applicationId = req.params.id;
        if (!status) {
            return res.status(400).json({
                message: 'status is required',
                success: false
            })
        };

        // find the application by applicantion id
        const application = await applicationModel.findOne({ _id: applicationId });
        if (!application) {
            return res.status(404).json({
                message: "Application not found.",
                success: false
            })
        };

        // update the status
        application.status = status.toLowerCase();
        await application.save();

        return res.status(200).json({
            message: "Status updated successfully.",
            success: true
        });

    } catch (error) {
        console.log(error);
    }
}