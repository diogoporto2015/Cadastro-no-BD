const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require("body-parser")
const usuario = require("./modulos/Usuario");


//Inseri aparencia, imagens comando dos butões em js
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/img', express.static('img'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


router.get('/cadastro', function(req, res){
    res.sendFile(path.join(__dirname+'/cadastro.html'));
})

router.get('/logar', function(req, res){
    res.sendFile(path.join(__dirname+'/logar.html'));
})

app.use('/', router);

app.post('/logar', function(req, res){
    usuario.create({
        nome: req.body.nome,
        senha: req.body.senha
    }).then(function(){
        res.sendFile(path.join(__dirname+'/logar.html'));
    }).catch(function(erro){
        res.send('Erro: Nã0 foi cadastrado!' + erro)
    })
})



app.listen(8080);
console.log("Servidor Rodando e Funcionando! localhost:8080");
