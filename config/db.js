import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect(process.env.URI_MONGO)
    } catch (error) {
        console.error(error)
    }
}

connectDB()