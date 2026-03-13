import Razorpay from "razorpay";
import { productmodel } from "../models/product.model.js";
import { paymentmodel } from "../models/payment.model.js";
const razorpay=new Razorpay({
    key_id:process.env.RAZORPAY_KEY_ID,
    key_secret:process.env.RAZORPAY_KEY_SECRET
})

export const createOrder = async (req, res) => {
  const product = await productmodel.findOne();
  const options={
    amount:product.price.amount,
    currency:product.price.currency
  }

  try{
    const order=await razorpay.orders.create(options);
    await paymentmodel.create({
        orderId:order.id,
        price:
        {
            amount:order.amount,
        currency:order.currency,
    },
        status:'PENDING'
    })
     res.status(201).json(order);
  }catch(error){
    res.status(500).send('Error creating order')
  }
};


export const verifypayment=async (req,res)=>{
   const { razorpayOrderId, razorpayPaymentId, signature } = req.body;
  const secret = process.env.RAZORPAY_KEY_SECRET

  try {
    const { validatePaymentVerification } = require('../../node_modules/razorpay/dist/utils/razorpay-utils.js') 

    const result = validatePaymentVerification({ "order_id": razorpayOrderId, "payment_id": razorpayPaymentId }, signature, secret);
    if (result) {
      const payment = await paymentmodel.findOne({ orderId: razorpayOrderId });
      payment.paymentId = razorpayPaymentId;
      payment.signature = signature;
      payment.status = 'COMPLETED';
      await payment.save();
      res.json({ status: 'success' });
    } else {
      res.status(400).send('Invalid signature');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Error verifying payment');
  }
  
}



