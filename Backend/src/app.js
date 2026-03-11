import express from "express"
import router from "./routes/product.routes.js"
import cors from "cors";
const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/products", router)

export default app