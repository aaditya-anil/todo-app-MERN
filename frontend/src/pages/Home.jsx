import React, {useState,useEffect} from "react";
import axios from "axios";
import todo from "../../../Backend/models/todo";
import Icon from '@mdi/react';
import { mdiPencilCircle } from '@mdi/js';
import { mdiDeleteCircle  } from '@mdi/js';



export default function HomePage(){
    const [todos, setTodos] = useState([]);
    const [todoName, setTodoName] = useState("");

    useEffect(()=>{
        axios
            .get("http://localhost:5555/todo")
            .then((response) => setTodos(response.data))
            .catch((error) => console.log(error));
    }, []);

    const createTodo = async () => {
        
        await axios
            .post("http://localhost:5555/todo", {
                todoName
            })
            .then((response) =>{
                console.log("todoAdded"+response);
            });  
        window.location.reload()    
    }

    const deleteTodo = async (todoId) => {
        await axios
            .delete(`http://localhost:5555/todo/${todoId}`)
            .then((response)=>{
                console.log("TodoDeleted"+response)
            });
        window.location.reload()
    }

    const updateTodo = async (todoId) => {
        var todoName = prompt("Enter edited todo");
        console.log(todoName);
        await axios
            .put(`http://localhost:5555/todo/${todoId}`, {
                todoName
            })
            .then((response) => {
                console.log("TodoUpdated"+response)
            });
        window.location.reload();
    }

    return(
        <div className="Container">
            <div className="Todo-List">
                <h1>Your Todos</h1>
                <ul>
                {todos.map((todo) =>(
                    <li key={todo._id}>
                        {todo.todoName}
                        <Icon path={mdiPencilCircle} size={1} onClick={() => updateTodo(todo._id)} />
                        <Icon path={mdiDeleteCircle } size={1} onClick={() => deleteTodo(todo._id)} />
                    </li>
                ))}
                </ul>
            </div>
            <div className="input-container">
                <form action="/submit">
                <input type="text" id="input" placeholder="Enter your todo" onChange={(Event) => setTodoName(Event.target.value)}></input>
                <button type="submit" onClick={createTodo}></button>
                
                </form>
            </div>
        </div>
    );
}

