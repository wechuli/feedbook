const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  googleID: {
    type: String,
    required: true,
    unique: true,
    maxlength: 100
  },
  name: {
    type: String,
    maxlength: 255
  }
});

module.exports = mongoose.model("users", userSchema);
