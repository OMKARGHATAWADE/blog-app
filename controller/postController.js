import { Post } from "../models/postModel.js";

export const createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({
      title,
      body,
    });

    const savedPost = await post.save();

    res.json({
      post: savedPost,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({})
      .populate("comments")
      .populate("likes")
      .exec();

      res.json({
        posts
      })
  } catch (error) {
    console.log(error);
  }
};
