import mongoose, { Schema } from "mongoose";
const paymentSchema=new Schema({
    orderId:{
        type:String,
        required:true
    }
    ,
    paymentId:{
        type:String
    },
    signature:{
        type:String
    },
    price:{
        amount:{
            type:Number,
            required:true
        },
        currency:{
            type:String,
            required:true
        }
    }
    ,status:{
        type:String,
        default:"PENDING",
        enum:['PENDING','COMPLETED','FAILED']
    }
},{
    timestamps:true
})

export const paymentmodel=mongoose.model("payment",paymentSchema)