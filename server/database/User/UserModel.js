let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  username:String,
  password: String,
  email:String,
  date:String
});

module.exports = mongoose.model('users', UserSchema);
