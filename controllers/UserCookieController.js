const UserCookieSchema = require('../models/userCookie');

const createUserCoookie = async (req, res) => { // add cookie 
  try {
    const userCookieTempt = new UserCookieSchema(req.body)
    const post = await userCookieTempt.save();
    if (post) {
      res.status(200).json({
        status: 1,
        message: "Thêm cookie thành công"
      });
    }
  }
  catch (error) {
    res.status(500).json({ message: "Lỗi hệ thống" + error });
  }
};


const getAllCookie = async (req, res) => { // getAllCookie
  try {
    const posts = await UserCookieSchema.find({}, { _id: 0, Cookie: 1 })
    console.log("gia tri data get về", posts);
    if (posts) {
      res.status(200).json({
        status: 1,
        data: posts
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Lỗi hệ thống" + error })
  }

};


const deleteAllCookie = async (req, res) => { // remove Cookie
  try {
    const taskDelete = await UserCookieSchema.deleteMany()
    if (taskDelete) {
      res.status(200).json(
        {
          status: 1,
          message: 'Successfully deleted'
        });
    }
    else {
      res.status(500).json({ message: 'Could not delete' });
    }
  } catch (error) {
    res.status(500).json({ message: "Lỗi hệ thống" + error });
  }

};

module.exports = {
  createUserCoookie,
  deleteAllCookie,
  getAllCookie
  //  getTask,
  //   updateTask,
  //    deleteTask, 
  //    getAllCategory 
};