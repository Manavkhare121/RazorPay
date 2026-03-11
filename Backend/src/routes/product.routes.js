import express from "express"
import { getItem ,createProduct} from "../controllers/product.controller.js"
const router = express.Router()

router.post("/", createProduct)
router.get("/get-item",getItem)

export default router