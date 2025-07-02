import express from "express";
require('dotenv').config()
import 'reflect-metadata';

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("servidor rodando")
})

app.listen(process.env.API_PORT, () => {
    console.log("servidor rodando na porta",process.env.API_PORT);
    
})