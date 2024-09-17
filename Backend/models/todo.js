import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        todoName: String,
        todoDesc: String,
    }
);

export default mongoose.model('Todo',todoSchema);


