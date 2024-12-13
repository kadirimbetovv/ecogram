import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { updateUser, followUnfollowUser, getUserProfile } from "../controllers/userController.js";


const router = express.Router();

router.get("/profile/:username", protectRoute, getUserProfile);
router.post("/follow/:id", protectRoute, followUnfollowUser);
router.post("/update", protectRoute, updateUser);




export default router;