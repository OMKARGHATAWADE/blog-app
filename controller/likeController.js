import { Like } from "../models/likeModel";

export const createLike = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({
      post,
      user,
    });

    const savedLike = await like.save();

    const updateLike = await Like.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    );
  } catch (error) {
    console.log(error);
  }
};
