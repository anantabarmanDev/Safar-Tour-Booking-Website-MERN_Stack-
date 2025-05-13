import express from "express";
import {
  deleteUser,
  getAllUser,
  updateUser,
  getSingleUser,
} from "../controller/userController.js";

const router = express.Router();

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";


// Update User
router.put("/:id",verifyUser, updateUser);
// Delete User
router.delete("/:id",verifyUser, deleteUser);
// get Single User
router.get("/:id",verifyUser, getSingleUser);
// getAll  User
router.get("/",verifyAdmin, getAllUser);

export default router;
