import { productmodel } from "../models/product.model.js";

async function createProduct(res,req) {
    const {image,title,description,price:{amount,currency},category}=req.body;

    try{
        const product=await productmodel.create({
            image,title,description,price:{amount,currency},category
        }=req.body)
        return res.this.status(201).json({
            message:"Product is created succesfully"
        })
    }catch(error){
        return res.status(500).json({
            message:"Something went wrong",
            error:error.message
        })
    }
}

export default createProduct;