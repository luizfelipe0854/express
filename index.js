const express = require("express")
const app = express()

app.use(express.json())

const data = []

app.listen(3000, ()=>{
    console.log("Rodando na porta 3000")
})

// BUSCANDO TODOS OS USUARIOS
app.get("/usuarios",(req,res)=>{
    res.status(200).send(data)
})

// BUSCANDO UM USUARIO EM ESPECIFICO
app.get("/usuarios/:id",(req,res)=>{
    const id = req.params.id
    const index = data.findIndex((user)=> user.id == id)
    const user = data[index]
    res.status(200).send(user)
})

// CRIANDO UM NOVO USUARIO
app.post("/usuarios",(req,res)=>{
    console.log(req.body)
    data.push(req.body)
    res.status(200).send(`Usuario ${req.body.id} salvo`)
})

// ATUALIZANDO UM USUARIO
app.put("/usuarios/:id",(req,res)=>{
    const id = req.params.id
    const index = data.findIndex((user)=> user.id == id)
    const userUpdated = req.body
    data[index]= userUpdated
    res.status(200).send(`Usuario ${id} atualizado`)
})

// DELETANDO UM USUARIO
app.delete("/usuarios/:id",(req,res)=>{
    const id = req.params.id
    const index = data.findIndex((user)=> user.id == id)
    data.splice(index,1)
    res.status(200).send(`Usuario ${id} deletado`)

})
