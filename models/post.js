const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  lawyerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  userID : {
    type : String
  },
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now()
  },
  comment: {
    type: String,
  },
});

module.exports = Post = mongoose.model("post", postSchema);