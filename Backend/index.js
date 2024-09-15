import express from "express"
import { PORT, mongoDBUrl } from "./config.js";
import mongoose from 'mongoose'

const app = express();

app.get('/', (request,response) =>{
    console.log(request);
    return response.status(200).send("Hi");
});

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
