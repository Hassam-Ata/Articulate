import mongoose from "mongoose";

// process.env.MONGO || 

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI; // Try Vercel URI first, fallback to local
    await mongoose.connect(uri);
    console.log("MongoDB is connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err; // Re-throw to handle in parent
  }
};

export default connectDB;
