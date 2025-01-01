import express from "express";
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import webhookRouter from "./routes/webhook.route.js";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import cors from "cors";

const app = express();
const PORT = process.env.port || 5000;
// const CLIENT_URL =
//   process.env.CLIENT_URL || "https://articulate-client.vercel.app";

// Configure CORS
app.use(cors());

app.use(clerkMiddleware());
app.use(express.json());

// Routes
app.use("/webhooks", webhookRouter);
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

// Error handling middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message || "Something went wrong!",
    status: error.status,
    stack: error.stack,
  });
});

// Start server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
