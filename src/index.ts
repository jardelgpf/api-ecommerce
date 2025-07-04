import express from "express";
import 'reflect-metadata';
import routeProdutos from './routes/produto.routes'
require('dotenv').config()

const app = express()
app.use(express.json())

app.use('/produtos',routeProdutos)



app.listen(process.env.API_PORT, () => {
    console.log("servidor rodando na porta ",process.env.API_PORT)
})