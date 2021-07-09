const ProductSchema = require('../models/product');

const createProduct = async (req, res) => {
  const Product = new ProductSchema({
    _id:req.body._id,
    nameproduct:req.body.nameproduct,
    imgproduct:req.body.imgproduct,
    description:req.body.descriptio,
    _idCategory:req.body._idCategory,
    quanity:req.body.quanity,
    size:req.body.size,
    color:req.body.color,
  });
const post= await Product.save();
  try {
    if(post)
    {
      res.status(200),json({message:'add ok !!'});
    }
  } catch (error) {
    res.status(500).json({message: error});
  }
};

const getTask = (req, res) => {
  ProductSchema.find({_id: req.params.id}, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({message: err});
    } else {
      res.status(200).json(results);
    }
  });
};

const getAllProduct = async (req, res) => {
  try {
    const posts=await ProductSchema.find();
    if(posts)
    {
      res.status(200).json(posts);
    }
  } catch (error) {
    res.status(400).json({err:error})
  }

};


const updateTask = async (req, res) => {
  const taskUpdate = await ProductSchema.findOneAndUpdate({_id: req.params.id}, {
    $set: {
      nameproduct:req.body.nameproduct,
      imgproduct:req.body.imgproduct,
      description:req.body.descriptio,
      _idCategory:req.body._idCategory,
      quanity:req.body.quanity,
      size:req.body.size,
      color:req.body.color,
    },
  }, {new: true});

  if (taskUpdate) {
    res.status(200).json({message: 'Successfully updated'});
  } else {
    res.status(500).json({message: 'Could not update'});
  }
};

const deleteTask = async (req, res) => {
  const taskDelete = await ProductSchema.findByIdAndDelete({_id: req.params.id});
  if (taskDelete) {
    res.status(200).json({message: 'Successfully deleted'});
  } else {
    res.status(500).json({message: 'Could not delete'});
  }
};

module.exports = {createProduct, getTask, updateTask, deleteTask,getAllProduct};