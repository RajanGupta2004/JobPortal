

import jwt from "jsonwebtoken"

const isAuthenticated = async (req, res, next) => {
    try {
        // get token from cookies
        const token = req.cookies.token;


        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Your are not authenticated....."
            })
        }


        const decode = await jwt.verify(token, process.env.SECRET_KEY)

        if (!decode) {
            return res.status(401).json({
                success: false,
                message: "you are not valid user..."
            })
        }


        req.id = decode.userId

        next()



    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Authentication failed. Please try again."
        });

    }
}

export default isAuthenticated