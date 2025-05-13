import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/bookings.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = { origin: true, credentials: true };

// DATABASE CONNECTION
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB database connected.");
  } catch (err) {
    console.error("MongoDB database connection failed!", err.message);
    process.exit(1); // Optionally exit if DB connection fails
  }
};

// MIDDLEWARE
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);

app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

// START SERVER
app.listen(PORT, async () => {
  await connect();
  console.log(`SERVER IS LISTENING ON PORT ${PORT}`);
});
