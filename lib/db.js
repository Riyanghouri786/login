import mongoose from "mongoose";

const DB_URL =
  "mongodb+srv://riyanghouri353:Wn4WuyVUhHKduu6i@cluster0.pxtvo.mongodb.net/okay?retryWrites=true&w=majority&appName=Cluster0";

// Wn4WuyVUhHKduu6i

const connect = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to database successfully");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    throw new Error("Database connection failed");
  }
};

export default connect;
