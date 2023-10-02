import express from 'express';
//Server
const server = express();
const porta = 3000;
server.use(express.json());
//FimServer

const alunos = [
    {idAluno: 1, nome: "André", email: "andre@gmail.com"}
]

server.get('/', (req, res) =>{
    res.send('Sistema Educacional...');
});

server.get('/aluno', (req, res) =>{
    res.send(alunos);
});

server.post('/aluno', (req, res) =>{
    try {
        alunos.push(req.body)
        res.status(201).send("Aluno cadastrado com sucesso.");
    } catch (error) {
        res.status(400).send("Erro ao cadastrar aluno.");
    }
})

function buscarIndiceAluno(id:number){
    return alunos.findIndex(aluno => aluno.idAluno == id);
}

//function buscarAlunoPorId(id:number){
//    return alunos.findIndex( livro => livro.idAluno == id)
//}

server.delete("/aluno/:id", (req,res)=>{
    let indice = buscarIndiceAluno( Number(req.params.id))
    console.log(indice)
    alunos.splice(indice, 1)
    res.send(alunos)
})

server.listen(porta, () =>{
    console.log(`Servidor rodando na porta ${porta}`);
});

server.put('/aluno/:id', (req,res)=>{
    console.log(req.params.id);
    let indice = buscarIndiceAluno( Number(req.params.id))
    console.log(indice);
    alunos[indice].nome = req.body.nome;
    alunos[indice].email = req.body.email;
    res.json(alunos)
})
