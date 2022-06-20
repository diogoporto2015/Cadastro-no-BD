var btnEntrar = document.querySelector("#entrar");
var btnVoltar = document.querySelector("#voltar");

var body = document.querySelector("body");

btnEntrar.addEventListener("click", function () {
    body.className = "entrar-js";
});

btnVoltar.addEventListener("click", function() {
    body.className = "voltar-js";
})


