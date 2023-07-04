import express from "express";
import { commentPost, getFeedPosts, getUserPosts, likePost, starPost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);
router.patch("/:id/star", verifyToken, starPost);
router.patch("/:id/comment", verifyToken, commentPost)

export default router;
