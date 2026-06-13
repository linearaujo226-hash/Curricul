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

const elemento =
document.getElementById(id);

if(elemento){
localStorage.setItem(
id,
elemento.value
);
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

const elemento =
document.getElementById(id);

if(elemento){
elemento.value =
localStorage.getItem(id) || "";
}

});

}

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

function atualizarDashboard(){

const dados =
obterDashboard();

const curriculos =
document.getElementById(
"totalCurriculos"
);

const entrevistas =
document.getElementById(
"totalEntrevistas"
);

const analises =
document.getElementById(
"totalAnalises"
);

const cartas =
document.getElementById(
"totalCartas"
);

if(curriculos)
curriculos.innerText =
dados.curriculos;

if(entrevistas)
entrevistas.innerText =
dados.entrevistas;

if(analises)
analises.innerText =
dados.analises;

if(cartas)
cartas.innerText =
dados.cartas;

}

window.addEventListener(
"DOMContentLoaded",
() => {
carregarDados();
atualizarDashboard();
}
);
