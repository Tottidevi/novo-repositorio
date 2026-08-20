const elementoSaudacao = document.querySelector("#saudacao");
const elementoHora = document.querySelector("#hora");
const elementoData = document.querySelector("#data");

const nomeVariavel = prompt("Digite seu nome aí:") || "Usuário";

const diasSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

function atualizarRelogio() {

    const agora = new Date();

    const diaSemana = diasSemana[agora.getDay()];

    const dia = String(agora.getDate()).padStart(2, "0");
    const mes = String(agora.getMonth() + 1).padStart(2, "0");
    const ano = agora.getFullYear();

    const hora = String(agora.getHours()).padStart(2, "0");
    const minuto = String(agora.getMinutes()).padStart(2, "0");
    const segundo = String(agora.getSeconds()).padStart(2, "0");

    elementoSaudacao.textContent = `Olá, ${nomeVariavel}!`;

    elementoHora.textContent =
        `${hora}:${minuto}:${segundo}`;

    elementoData.textContent =
        `${diaSemana}, ${dia}/${mes}/${ano}`;
}

atualizarRelogio();

setInterval(atualizarRelogio, 1000);