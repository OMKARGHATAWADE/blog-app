import { Post } from "../models/postModel.js";
import { Comment } from "../models/commentModel.js";

const createComment = async (req, res) => {
  try {
    const { user, body, post } = req.body;

    const comment = new Comment({
      post,
      body,
      user,
    });

    const savedComment = await comment.save();
    const updatePost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    )
      .populate("comments")
      .exec();

    res.json({
      post: updatePost,
    });
  } catch (error) {
    console.log(error);
  }
};

export default createComment;