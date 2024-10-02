import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        todoName: String,
    }
);

export default mongoose.model('Todo',todoSchema);


