import mongoose from "mongoose";

const messagingSchema = new mongoose.Schema(
  {
    name: String,
    message: String,
    received: Boolean,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Messagings", messagingSchema);
