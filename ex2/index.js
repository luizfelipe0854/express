const express = require("express")
const app = express()

app.use(express.json())

const alunos = []


app.listen(4000, ()=>{
    console.log("Rodando na porta 4000")
})

// BUSCANDO TODOS OS ALUNOS
app.get("/alunos", (req,res)=>{
    res.status(200).send({alunos: alunos})
})

// BUSCANDO ALUNO POR ID
app.get("/alunos/:id", (req,res)=>{
    const id = req.params.id
    res.status(200).send({alunos: alunos.find((aluno)=> aluno.id == id)})
})

// CRIANDO NOVO ALUNO
app.post("/alunos",(req,res)=>{
    alunos.push(req.body)
    res.status(200).send(`O aluno do ID ${req.body.id} foi cadastrado`)
})

// ATUALIZANDO CADASTRO ALUNO
app.put("/alunos/:id",(req,res)=>{
    const id = req.params.id
    const index = alunos.findIndex((aluno)=> aluno.id == id)
    alunos[index]= req.body
    res.status(200).send(`O aluno do ID ${req.body.id} foi atualizado`)
})

// DELETANDO CADASTRO ALUNO
app.put("/alunos/:id",(req,res)=>{
    const id = req.params.id
    const index = alunos.findIndex((aluno)=> aluno.id == id)
    alunos.splice(index,1)
    res.status(200).send(`O aluno do ID ${id} foi deletado`)
})