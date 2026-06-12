function salvarDados(){

const campos = [
"nome",
"email",
"telefone",
"cidade",
"cargo",
"linkedin",
"formacao",
"experiencia",
"habilidades",
"conquistas"
];

campos.forEach(id => {

let elemento = document.getElementById(id);

if(elemento){
localStorage.setItem(id, elemento.value);
}

});

}

function carregarDados(){

const campos = [
"nome",
"email",
"telefone",
"cidade",
"cargo",
"linkedin",
"formacao",
"experiencia",
"habilidades",
"conquistas"
];

campos.forEach(id => {

let elemento = document.getElementById(id);

if(elemento){
elemento.value =
localStorage.getItem(id) || "";
}

});

}

window.onload = carregarDados;
