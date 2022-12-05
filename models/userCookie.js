const mongoose = require('mongoose');

const UserCookieSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  Cookie: {
    type: String,
    unique: true
  },
  extra: { _id: false }
});

module.exports = mongoose.model('UserCookie', UserCookieSchema);