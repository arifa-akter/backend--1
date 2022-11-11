const { Schema, model } = require('mongoose');

const productSchema = Schema({
  productName:{type: String, required: true},
  description:{type:String},
  price: Number,
  quantity: Number
})

module.exports =model('product', productSchema)