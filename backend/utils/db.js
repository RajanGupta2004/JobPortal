import mongoose from "mongoose"



const connectDB = async (DATABASE_URL) => {
    console.log(DATABASE_URL)

    try {
        const options = {
            dbName: "JobPortal"
        }

        await mongoose.connect(DATABASE_URL, options)
        console.log("Data base connected successfully")

    } catch (error) {
        console.log(error)

    }
}


export default connectDB