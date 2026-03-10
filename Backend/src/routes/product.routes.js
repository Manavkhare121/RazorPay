import express, { Router } from "express";
import createProduct from "../controllers/product.controller.js";
import { Router } from "react-router-dom";
const router=Router()

router.post("/",createProduct)

export default router;