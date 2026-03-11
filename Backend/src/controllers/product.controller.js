import { productmodel } from "../models/product.model.js";

async function createProduct(req, res) {
    try {

        const { image, title, description, price, category } = req.body;

        const product = await productmodel.create({
            image,
            title,
            description,
            price,
            category
        });

        return res.status(201).json({
            message: "Product is created successfully",
            product
        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
}

async function getItem(req,res) {
    try{
        const products=await productmodel.findOne();
        return res.status(200).json({
            message:"Products fetched successfully",
            products
        })
    }
    catch(error){
        return res.status(500).json({message:"something went wrong",
            error:error.message
        })
    }
}
export {createProduct,getItem};