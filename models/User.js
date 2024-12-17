import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    // Removes leading/trailing whitespace
  },
  email: {
    type: String,
    required: true,
    unique: true, // Fixed the typo
    lowercase: true, // Ensures email is stored in lowercase
  },
  balance: {
    type: Number,
    default: 10,
    min: 0, // Ensures the balance cannot go below 0
  },
  password: {
    type: String,
    required: true,
  },
});

// Prevent model re-compilation in development
export default mongoose.models.User || mongoose.model("User", UserSchema);
