import express from 'express'
import dotenv from "dotenv"
import cors from "cors"
import connectDB from './utils/db.js'
import userRoute from './routes/userRoute.js'
import cookieParser from 'cookie-parser'

// configure dot env
dotenv.config()

const app = express()

const port = process.env.PORT || 3000
const DATABASE_URL = process.env.MONGODB_URL

// configure and remove cors policy error
const corsroption = {
    origin: 'http://localhost:5173',
    Credentials: true
}
app.use(cors(corsroption))

// Data base connection
connectDB(DATABASE_URL)

// middle ware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())



// all apis

app.use("/api/v1/user", userRoute)






app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})