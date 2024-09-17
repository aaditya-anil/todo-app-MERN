import express from "express"
import { PORT, mongoDBUrl } from "./config.js";
import mongoose from 'mongoose'
import booksRouter from './routes/todoRoute.js'

const app = express();

//Middleware for parsing request body
app.use(express.json());

// Middleware for handling cors policy
app.use(cors({
    origin: 'http://localhost:5173/',
    methods: ['GET','POST','PUT','DELETE'],
    allowedHeaders: ['Content-Type']
}));

app.get('/', (request,response) =>{
    return response.status(200).send("Hi");
});

app.use('/books',booksRouter)

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
