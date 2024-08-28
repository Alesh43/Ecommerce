const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;

const orderRequestSchema = new mongoose.Schema({
 
  products:[ {
    type: ObjectId,
    ref: 'Product',
  
  }
 ],
  totalOrder: {
    type: Number
  },
  totalPrice:{
    type:Number
  },
  orderStatus:{
    type:String,
    enum: ['request'| 'payment' | 'shipping' | 'delievered' | 'cancelled']
  },
  shippingAddress:{
    user:{
        type:ObjectId,
        ref:'User'
    },
    address:{
        type:String
    }
  },
  stripePaymentIntentId:{
    type:String,
    required:true,
  },
  stripeChargeId:{
    type:String,
    default:null,
  },

}, { timestamps: true })

module.exports = mongoose.model('OrderRequest', orderRequestSchema)