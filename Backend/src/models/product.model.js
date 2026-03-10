import mongoose, { Schema } from "mongoose";

const productSchema=new Schema({
    image:{
        type:String
    },
    title:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        amount:{
            type:Number,
            min:0,
        },
        currency:{
            type:String,
            default:"INR",
            enum:["INR","USD"]
        }
    }
},

{
timestamps:true
}

)

export const productmodel=mongoose.model("product",productSchema)