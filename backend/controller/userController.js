import User from "../models/User.js";

// Create New User
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedUser,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create, Try again" });
  }
};

// Update User
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updateUser = await User.findByIdAndUpdate(
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

// delete User
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully Deleted",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to Delete" });
  }
};

// getSingle tour
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const User = await User.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfully Found",
      date: User,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

// getAll User
export const getAllUser = async (req, res) => {
   
  try {
    const users = await User.find({})
      
    res.status(200).json({
      success: true,
       message: "Successfully get All",
      date: users,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};
