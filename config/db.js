import mongoose from "mongoose";

console.log(process.env.URI_MONGO);


async function connectDB() {
    try {
        await mongoose.connect(process.env.URI_MONGO)
    } catch (error) {
        console.error(error)
    }
}

connectDB()