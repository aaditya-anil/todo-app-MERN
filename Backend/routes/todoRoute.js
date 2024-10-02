import  express, { response }  from "express";
import TodoModel from "../models/todo.js";  

const router = express.Router();

router.post('/', async (request,response) => {
    try{
        if (!request.body.todoName) {
            return response.status(400).send({
                message: 'Required fields Empty'
            });
        }
        const newTodo = new TodoModel({
            todoName: request.body.todoName,
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

router.delete('/:id', async(request,response) =>{
    const todoId = request.params.id;

    const todo = await TodoModel.findById(todoId);

    if (!todo) {
        return response.status(404).send({
            message: "Todo Not Found"
        })
    }

    // delete the todo

    await TodoModel.findByIdAndDelete(todoId);

    response.status(200).send({
        message : "Todo deleted successfully"
    })
})

router.put('/:id', async (request,response) =>{
    if (!request.body.todoName) {
        return response.status(400).send({
            message: 'Required fields Empty'
        });
    }

    const todoId = request.params.id;

    if(!TodoModel.findById(todoId)){
        return response.status(404).send({
            message: "Todo Not Found"
        })
    }

    const todoUpdate = await TodoModel.findByIdAndUpdate(todoId,{
        "todoName" : request.body.todoName
    },{ new: true });

    response.status(200).send({
        message : "Todo Updated",
        response: todoUpdate
    })
})

export default router