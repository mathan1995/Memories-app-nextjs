import express from "express";
const router = express.Router();
import { getPosts, createPost } from "../controllers/posts.controllers.js";

/*
    All routes
====================
 1.GET => /posts
 2.POST => /posts/newpost

 */

router.get("/", getPosts);
router.post("/", createPost);

export default router;
