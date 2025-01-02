import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGO;
    await mongoose.connect(uri);
    console.log("MongoDB is connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
};

export default connectDB;
