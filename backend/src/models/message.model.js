import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        senderId: { type: String, required: true }, // Clerk user UD
        receiverId: { type: String, required: true }, // Clerk user ID
        content: { type: String, required: true },
    },
    { timestamps: true } // createdAt, updateAt
);

export const Message = mongoose.model("Message", messageSchema);