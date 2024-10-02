import express from "express"
import { PORT, mongoDBUrl } from "./config.js";
import mongoose from 'mongoose'
import todoRouter from './routes/todoRoute.js'
import cors from 'cors'

const app = express();

//Middleware for parsing request body
app.use(express.json());

// Middleware for handling cors policy
app.use(cors());

app.get('/', (request,response) =>{
    return response.status(200).send("Hi Youve reached the Backend Server of GetThingsDone");
});

app.use('/todo',todoRouter)

mongoose
    .connect(mongoDBUrl)
    .then(()=>{
        app.listen(PORT, ()=>{
            console.log(`App is listening to port: ${PORT}`);
        })
    })
    .catch((exception)=>{
        console.log(exception)
    });
