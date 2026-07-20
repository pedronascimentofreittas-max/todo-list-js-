let listElement = document.querySelector(".lista ul");

let inputElement = document.querySelector("#app input");

let buttonElement = document.querySelector(".button");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

function mostrarTarefas() {
    listElement.replaceChildren();
    //percorrer todos os elementos (sem criar uma lista nova /IA)
    tarefas.forEach((tarefa) => {

        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(tarefa);


        tarefas.forEach(() => {
            let posicao = tarefas.indexOf(tarefa);
            console.log(posicao);
            let liElement = document.createElement("li")
        })


        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        let posicao = tarefas.indexOf(tarefa);

        linkElement.setAttribute("onclick", `ExcluirTarefas(${posicao})`);
        //criar um splice para eliminar itens dentro da array 




        //adicionando itens dentro da tag a  

        let linkText = document.createTextNode("❌");

        linkElement.appendChild(linkText);

        liElement.appendChild(tarefaText)
        listElement.appendChild(liElement)
        liElement.appendChild(linkElement)


    })

}

mostrarTarefas();

function adicionarTarefas() {
    if (inputElement.value === "") {
        //enfeite kkkkkkk
        document.querySelector(".alerta").style.display = "block"
        setTimeout(() => {
            document.querySelector(".alerta").style.display = "none";
        }, 3000);
        return;

    } else {
        let novatarefa = inputElement.value;
        tarefas.push(novatarefa);
        inputElement.value = "";
        mostrarTarefas();
        salvarDados();

        //console.log(inputElement.value)

    }

}
buttonElement.onclick = adicionarTarefas;





function ExcluirTarefas(posicao) {
    //excluindo
    tarefas.splice(posicao, 1);
    mostrarTarefas();
    salvarDados();
}


//salvando no localStorage file//
function salvarDados() {
    //transformando em string
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas))


}


//frases motivacionais 
const frases = [
    "A constância ganha de tudo .",
    "mesmo sendo difícil , continue .",
    "você está indo muito bem! .",
    "toda tristeza vai ir embora! .",
    "tenho muito orgulho de você! .",
    "me inspiro em você! .",
    "Hoje melhor que ontem!.",
    "Não desista!.",
    "Você consegue!.",
    "você vai conseguir tudo que quer , basta continuar!.",
    "um dia de cada vez! .",
    "Seu futuro depende do que você faz hoje!."
];

const botaoMotivacao = document.querySelector("#motivacao");
const frase = document.querySelector("#frase");

botaoMotivacao.onclick = function () {
    const indice = Math.floor(Math.random() * frases.length);
    frase.textContent = frases[indice];
}

// Cronômetro
const span = document.querySelector("span");
const btnStart = document.querySelector("#iniciar");
const btnPause = document.querySelector("#pausar");
const btnReiniciar = document.querySelector("#Reiniciar");

let interval;
let segundos = 0;

function formatarTempo(segundosTotais) {
    const horas = Math.floor(segundosTotais / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segundos = segundosTotais % 60;

    return (
        String(horas).padStart(2, "0") + ":" +
        String(minutos).padStart(2, "0") + ":" +
        String(segundos).padStart(2, "0")
    );
}

btnStart.onclick = () => {
    btnStart.disabled = true;
    btnPause.disabled = false;

    interval = setInterval(() => {
        segundos++;
        span.textContent = formatarTempo(segundos);
    }, 1000);
};

btnPause.onclick = () => {
    clearInterval(interval);
    btnStart.disabled = false;
    btnPause.disabled = true;
};

btnReiniciar.onclick = () => {
    clearInterval(interval);
    segundos = 0;
    span.textContent = "00:00:00";
    btnStart.disabled = false;
    btnPause.disabled = true;
};


