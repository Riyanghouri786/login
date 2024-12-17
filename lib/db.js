import mongoose from "mongoose";

const DB_URI = process.env.DB_URL;

// Wn4WuyVUhHKduu6i

const connect = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Connected to database successfully");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    throw new Error("Database connection failed");
  }
};

export default connect;
