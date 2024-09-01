import userModel from '../models/userSchema.js'
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const register = async (req, res) => {
    try {

        const { fullName, email, phoneNumber, password, role } = req.body

        console.log(fullName, email, phoneNumber, password, role)
        // convert phone number data string into numver

        const phoneNumberData = Number(phoneNumber)

        if (!fullName || !email || !phoneNumberData || !password || !role) {
            return res.status(400).json({
                success: false,
                messsage: "All fields are required..."
            })
        }

        const user = await userModel.findOne({ email })

        if (user) {
            return res.status(400).json({
                message: "user already exist ....."
            })
        }

        // encrypt the passwords
        const salt = 10
        const hashedPassword = await bcrypt.hash(password, salt)

        // console.log(hashedPassword)


        //  create the user

        await userModel.create({
            fullName,
            email,
            phoneNumber: phoneNumberData,
            password: hashedPassword,
            role

        })

        return res.status(201).json({
            success: true,
            message: "Accout created successfully...."
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: "some thing went wrong..."
        })

    }
}


const login = async (req, res) => {


    try {

        const { email, password, role } = req.body

        if (!email || !password || !role) {
            return res.status(400).json({
                success: false,
                message: "all fields are required..."
            })
        }

        let user = await userModel.findOne({ email })

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "user in not register..."
            })
        }

        // compare password

        const isPasswordMatch = await bcrypt.compare(password, user.password)

        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: "Password and email does not match"
            })
        }

        //  check role of user

        if (role != user.role) {
            return res.status(400).json({
                success: false,
                message: "your role is not valid ..."
            })
        }

        // generate token
        const payload = {
            userId: user._id
        }

        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1d" })


        // how to set token into browswe

        res.cookie('token', token, {
            httpOnly: true, // The cookie is not accessible via JavaScript
            secure: true,   // Ensure the cookie is sent over HTTPS (use in production)
            sameSite: 'strict', // Protect against CSRF attacks
            maxAge: 1 * 24 * 60 * 60 * 1000  // 1day
        })

        user = {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role
        }

        return res.status(200).json({
            success: true,
            user,
            message: "Login successfull......"
        })




    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: "something went wrong...."
        })
    }
}


const logout = async (req, res) => {
    try {

        res.clearCookie('token', {
            httpOnly: true,
            secure: true,     // Ensure the cookie is sent over HTTPS (use in production)
            sameSite: 'strict' // Protect against CSRF attacks
        });

        return res.status(200).json({
            success: true,
            message: "Logout successful"
        })

    } catch (error) {
        console.log(error)

    }
}



const updateProfile = async (req, res) => {

    try {

        const { fullName, email, phoneNumber, bio, skills } = req.body

        // convert the skill into string format into array
        let skillsArray;
        if (skills) {
            skillsArray = skills.split(",")
        }

        // check user is Authenticated or not using middleware

        const userId = req.id

        let user = await userModel.findById(userId)

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        // update user

        if (fullName) user.fullName = fullName
        if (email) user.email = email
        if (phoneNumber) user.phoneNumber = phoneNumber
        if (bio) user.profile.bio = bio
        if (skills) user.profile.skills = skills

        // save updated user
        await user.save()

        user = {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }



        return res.status(200).json({
            success: false,
            user,
            message: "User profile updated successfully..."
        })


    } catch (error) {
        console.log(error)


    }

}



export { register, login, logout, updateProfile }