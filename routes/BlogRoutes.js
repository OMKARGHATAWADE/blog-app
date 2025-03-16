import express from "express"
import createComment from "../controller/commentController.js";

const router = express.Router();

router.route("/create/comment").post(createComment)

export default router;