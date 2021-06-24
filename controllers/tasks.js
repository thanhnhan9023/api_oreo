const CategorySchema = require('../models/category');

const createTask = async (req, res) => {
  const Category = new CategorySchema({
    _id:req.body._id,
    nameproduct: req.body.nameproduct,
    imgprodcut:req.body.imgprodcut,
    description: req.body.descriptio,
  });
  // task.save().then(() => {
  //   console.log('Task Created'); // print in console
  //   res.status(200).json({message: 'Task Created'}); // send json to requester
  // }).catch((err) => {
  //   res.status(500).json({message: err});
  // });
const post= await Category.save();
  try {
    if(post)
    {
      res.status(200),json(Category.body);
    }
  } catch (error) {
    res.status(500).json({message: error});
  }
};

const getTask = (req, res) => {
  CategorySchema.find({_id: req.params.id}, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({message: err});
    } else {
      res.status(200).json(results);
    }
  });
};

const getAllCategory = async (req, res) => {
  try {
    const posts=await CategorySchema.find();
    if(posts)
    {
      res.status(200).json(posts);
    }
  } catch (error) {
    res.status(400).json({err:error})
  }

};


const updateTask = async (req, res) => {
  const taskUpdate = await CategorySchema.findOneAndUpdate({_id: req.params.id}, {
    $set: {
    nameproduct: req.body.nameproduct,
    imgprodcut:req.body.imgprodcut,
    description: req.body.descriptio,
    },
  }, {new: true});

  if (taskUpdate) {
    res.status(200).json({message: 'Successfully updated'});
  } else {
    res.status(500).json({message: 'Could not update'});
  }
};

const deleteTask = async (req, res) => {
  const taskDelete = await CategorySchema.findByIdAndDelete({_id: req.params.id});
  if (taskDelete) {
    res.status(200).json({message: 'Successfully deleted'});
  } else {
    res.status(500).json({message: 'Could not delete'});
  }
};

module.exports = {createTask, getTask, updateTask, deleteTask,getAllCategory};