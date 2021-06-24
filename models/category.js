const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  _id:{
    type: String,
    required: true
  },
  nameproduct: {
    type: String,
    required: true
  },
  imgproduct:{
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Category', CategorySchema);