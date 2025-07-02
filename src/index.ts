import express from "express";

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("servidor rodando")
})

app.listen(3000, () => {
    console.log("servidor rodando");
    
})