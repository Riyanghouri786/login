import mongoose from "mongoose";

const DB_URL = process.env.DB_URL;
let isConnected = false; // Keep track of the connection status

const connect = async () => {
  // Check if already connected
  if (mongoose.connection.readyState === 1) {
    console.log("Already Connected");
    return;
  }

  // Check if connecting
  if (mongoose.connection.readyState === 2) {
    console.log("Connecting...");
    return;
  }

  // Use existing connection if available
  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    const db = await mongoose.connect(DB_URL, {
      dbName: "smm",
      bufferCommands: false,
    });

    isConnected = db.connections[0].readyState === 1;
    if (isConnected) {
      console.log("Connected to database");
    }
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw new Error("Database connection failed");
  }
};

export default connect;
