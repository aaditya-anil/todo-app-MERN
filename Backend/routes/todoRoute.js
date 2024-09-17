import  express  from "express";
import TodoModel from "../models/todo.js";  

const router = express.Router();

router.post('/', async (request,response) => {
    try{
        if (!request.body.todoName ||!request.body.todoDesc) {
            return response.status(400).send({
                message: 'Required fields Empty'
            });
        }
        const newTodo = new TodoModel({
            todoName: request.body.todoName,
            todoDesc: request.body.todoDesc
        })
        await newTodo.save().then(()=>{
            console.log("Todo saved successfully")
            response.status(200).send({
                message: "created"
            })
        });
    }
    catch(error) {
        console.log(error.message)
        response.status(500).send({
            message: error.message
        });
    }
})

router.get('/', async (request,response)=>{
    try{
       const todos = await TodoModel.find({});
       response.status(200).json(todos); 
    }
    catch(error) {
        console.log(error.message)
        response.status(500).send({
            message: error.message
        });
    }
})

export default router