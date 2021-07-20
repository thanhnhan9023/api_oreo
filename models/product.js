const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  _id:{
    type:String,
    required: true,
    unique:true,
  },
  nameproduct: {
    type: String,
    required: true
  },
  imgproduct:[{img:String}],
  description: {
    type: String,
    required: true
  },
  _idCategory:{
    type: String,
  },
  quanity:{
    type:Number,
  },
  price:{
    type:Number,
  },
  size:[{size:String}],
  color:[{color:String}]
});

module.exports = mongoose.model('Product', ProductSchema);