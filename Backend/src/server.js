import app from "../src/app.js"
import dotenv, { config } from "dotenv"
import connectDB from "./db/db.js";
dotenv.config({
    path:'./.env'
})
connectDB()
const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`server is running at port${PORT}`)
})

