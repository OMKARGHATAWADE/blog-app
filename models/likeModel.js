import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  user: {
    type: String,
    required: true,
  },
 
});

export const Like = mongoose.model("Like", likeSchema);
