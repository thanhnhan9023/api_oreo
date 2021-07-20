const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
{
    FristName:{
        type:String,
        required:true,
    },
    LastName:{
        type:String,
        required:true,
    },
    UserName:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
    },
    RefreshToken:{
        type:String
    }
})
module.exports = mongoose.model('User', UserSchema);