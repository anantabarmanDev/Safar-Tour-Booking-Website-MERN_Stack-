import express from "express";
import {
  createTour,
  updateTour,
  deleteTour,
  getSingleTour,
  getAllTour,
  getFeaturedTour,
  getTourBySearch,
  getTourCount,
} from "../controller/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create New Tour
router.post("/", verifyAdmin, createTour);
// Update Tour
router.put("/:id", verifyAdmin, updateTour);
// Delete Tour
router.delete("/:id", verifyAdmin, deleteTour);
// get Single Tour
router.get("/:id", getSingleTour);
// getAll  Tour
router.get("/", getAllTour);
// get tour by search
router.get("/search/getTourBySearch", getTourBySearch);

router.get("/search/getFeaturedTours", getFeaturedTour);

router.get("/search/getTourCount", getTourCount);

export default router;
