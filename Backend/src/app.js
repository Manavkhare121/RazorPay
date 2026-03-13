import express from "express"
import router from "./routes/product.routes.js"
import paymentrouter from './routes/payment.routes.js'
import cors from "cors";
const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/products", router)
app.use("/api/payments", paymentrouter)

export default app