const mongoose = require('mongoose')
const{ ObjectId } = mongoose.Schema;


const productSchema = new mongoose.Schema({
    productName:{
        type: String,
        required:true,
        trim:true
    },
    productPrice:{
        type: String,
        required:true,
        trim:true
    },
    productDescription:{
        type: String,
        required:true,
        trim:true
    },
    productRating:{
        type: String,
        required:true,
        default: 5
    },

    productCategory:{
        type: ObjectId,
        ref:'Category',
        required:true
    },

    productImage:{
        type:String
    },

    totalProduct:{
        type:Number,
        default:0
    },

    tags: [
        {
          type: String,
          trim: true
        }
      ],

},{timestamps: true})

module.exports = mongoose.model('Product',productSchema)