const express = require("express")
const app = express()

app.use(express.json())

const concessionaria = []

app.listen(5000,()=>{
    console.log("Rodando na porta 5000")
})

// BUSCANDO TODOS OS CARROS
app.get("/concessionaria",(req,res)=>{
    res.status(200).send({concessionaria: concessionaria})
})

// BUSCANDO CARRO POR ID
app.get("/concessionaria/:id",(req,res)=>{
    const carro = concessionaria.find((carro)=> carro.id == req.params.id)
    res.status(200).send({carro: carro})
})

// CADASTRANDO CARRO
app.post("/concessionaria",(req,res)=>{
    concessionaria.push(req.body)
    res.status(200).send(`Carro ${req.body.id} cadastrado`)
})

// ATUALIZANDO CARRO
app.put("/concessionaria/:id",(req,res)=>{
    const carroIndex = concessionaria.findIndex((carro)=> carro.id == req.params.id)
    concessionaria[carroIndex] = req.body
    res.status(200).send(`Carro ${req.body.id} atualizado`)
})

// DELETANDO CARRO
app.delete("/concessionaria/:id",(req,res)=>{
    const carroIndex = concessionaria.findIndex((carro)=> carro.id == req.params.id)
    concessionaria.splice(carroIndex,1)
    res.status(200).send(`Carro ${req.params.id} deletado`)
})
