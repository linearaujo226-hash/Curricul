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

/* =========================
   DASHBOARD
========================= */

function obterDashboard(){

const historico =
JSON.parse(
localStorage.getItem("historico") || "[]"
);

return {

entrevistas:
historico.filter(
h => h.tipo === "entrevista"
).length,

curriculos:
historico.filter(
h => h.tipo === "curriculo"
).length,

analises:
historico.filter(
h => h.tipo === "analise"
).length,

cartas:
historico.filter(
h => h.tipo === "carta"
).length

};

}
