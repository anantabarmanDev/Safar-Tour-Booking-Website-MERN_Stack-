import Tour from "../models/Tour.js";

// Create New tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedTour,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create, Try again" });
  }
};

// Update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updateTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully Updated",
      data: updateTour,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

// delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully Deleted",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to Delete" });
  }
};

// getSingle tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successfully Found",
      data: tour,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

// getAll tour
export const getAllTour = async (req, res) => {
  // For Pagination
  const page = parseInt(req.query.page) || 0;
  console.log("Request received for getAllTourpage:",page);

  try {
    const tours = await Tour.find({})

      .populate("reviews")
      .skip(page * 8)
      .limit(8);

      console.log("Tours found:", tours.length);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successfully get All",
      data: tours,
    });
  } catch (err) {
    console.error("Error in getAllTour:", err);

    res.status(404).json({ success: false, message: "Not Found" });
  }
};

// get tour by search
export const getTourBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i"); // here 'i' means case sensitive.
  const distance = parseInt(req.query.distance) || 0;
  const maxGroupSize = parseInt(req.query.maxGroupSize) || 0;

  try {
    // gte means greater then equal
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successful ",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

// get featured tour
export const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(8);
    
    res.status(200).json({
      success: true,
      message: "Successfully get All",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

// get tour count
export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();

    res.status(200).json({
      success: true,
      data: tourCount,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "failed to fetch" });
  }
};
