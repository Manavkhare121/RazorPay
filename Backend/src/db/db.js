import mongoose, { mongo } from "mongoose"

async function connectDB(params) {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database connected successfully");
    }catch(error){
        console.log("Error Connecting to the database",error)
        
    }
}

export default connectDB;