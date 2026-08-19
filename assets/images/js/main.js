const elementoSaudacao = document.querySelector("#saudacao");

const nomeVariavel = prompt("Digite seu nome aí:");

const dataAtual = new Date();

const diasSemana = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado"
];

const diaSemana = diasSemana[dataAtual.getDay()];
const dia = String(dataAtual.getDate()).padStart(2, "0");
const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
const ano = dataAtual.getFullYear();
const hora = String(dataAtual.getHours()).padStart(2, "0");
const minuto = String(dataAtual.getMinutes()).padStart(2, "0");

const fusoMinutos = -dataAtual.getTimezoneOffset();
const sinal = fusoMinutos >= 0 ? "+" : "-";
const fusoHoras = String(
    Math.floor(Math.abs(fusoMinutos) / 60)
).padStart(2, "0");
const fusoMinutosRestantes = String(
    Math.abs(fusoMinutos) % 60
).padStart(2, "0");

const fusoHorario = `${sinal}${fusoHoras}:${fusoMinutosRestantes}`;

const dataFormatada = `${diaSemana}, ${dia}/${mes}/${ano} – ${hora}:${minuto} (${fusoHorario})`;

elementoSaudacao.textContent = `Olá, ${nomeVariavel}! Hoje é ${dataFormatada}`;

console.log("Nome:", nomeVariavel);
console.log("Data:", dataFormatada);