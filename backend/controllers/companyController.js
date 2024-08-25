import companyModel from "../models/companySchema.js";

const companyRegister = async (req, res) => {

    try {

        const { companyName } = req.body;

        if (!companyName) {
            return res.status(400).json({
                success: false,
                message: "company name is required..."
            })
        }


        const company = await companyModel.findOne({ name: companyName })

        if (company) {
            return res.status(400).json({
                success: false,
                message: "company name alreday available...."
            })

        }


        // create company

        await companyModel.create({
            name: companyName,
            userId: req.id
        })

        return res.status(201).json({
            success: true,
            message: "company is created..."
        })




    } catch (error) {
        console.log(error)

    }
}



const getCompany = async (req, res) => {
    try {

        const userId = req.id // loged in user

        const companys = await companyModel.find({ userId })

        if (!companys) {
            return res.status(404).json({
                success: false,
                message: "Company list is not found.."
            })
        }

        return res.status(200).json({
            success: true,
            companys
        })



    } catch (error) {
        console.log(error)

    }
}


const getCompanyById = async (req, res) => {
    try {

        const userId = req.params.id

        const company = await companyModel.findById(userId)
        if (!company) {
            return res.status(404).json({
                success: false,
                message: "company not found..."
            })

        }

        return res.status(200).json({
            success: true,
            company
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "Something went wrong..."
        })

    }
}



const updateCompany = async (req, res) => {
    try {

        const { name, description, website, location } = req.body

        const userId = req.id // loged in user
        // console.log("userId", userId)

        if (!userId) {
            return res.status(404).json({
                success: false,
                message: "You are not authorised to update"
            })

        }



        const updatedData = { name, description, website, location }

        const companyNewUpdate = await companyModel.findOneAndUpdate({ userId: userId }, updatedData, { new: true })
        // console.log(companyNewUpdate)

        if (!companyNewUpdate) {
            return res.status(400).json({
                success: false,
                message: "company not found"
            })
        }

        return res.status(200).json({
            success: true,
            companyNewUpdate
        })




    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "Something went wrong..."
        })

    }
}


export { companyRegister, getCompany, getCompanyById, updateCompany }