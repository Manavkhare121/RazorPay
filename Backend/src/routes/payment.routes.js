import express from "express"
import {createOrder,verifypayment}from "../controllers/payment.controller.js"

const router=express.Router()

router.post('/create-order',createOrder)
router.post('/verify',verifypayment)


export default router