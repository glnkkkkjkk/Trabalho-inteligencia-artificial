const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O volei é um esporte vibrante e dinâmico jogado entre duas equipes de seis jogadores cada. Com o objetivo de fazer a bola tocar no chão do campo adversário, os jogadores utilizam passes, ataques e bloqueios para marcar pontos. Além da habilidade técnica, o voleibol exige comunicação constante e sincronização entre os membros da equipe para superar os desafios táticos durante o jogo. Quando você joga vôlei, prefere estar na posição de:",
        alternativas: [
            {
                texto: "Atacante",
                afirmacao: " Melhora da condição física:* O voleibol ajuda a melhorar a resistência cardiovascular, a agilidade e a coordenação motora, contribuindo para um estilo de vida mais saudável."
            },
            {
                texto: "Defensor ",
                afirmacao: "Lesões frequentes:* Devido à natureza rápida e intensa do jogo, os jogadores estão sujeitos a lesões, como entorses, distensões musculares e impactos nas articulações."
            }
        ]
    },
    {
        enunciado: "Em uma partida de vôlei, você se destaca mais pela: ",
        alternativas: [
            {
                texto: " Precisão nos passes  ",
                afirmacao: "Exigência física:* O voleibol requer um bom condicionamento físico e resistência, o que pode ser desafiador para iniciantes ou jogadores menos preparados. "
            },
            {
                texto: "Potência nos ataques   ",
                afirmacao: "Desenvolvimento da habilidade de trabalho em equipe:* Como um esporte de equipe, o vôlei promove a colaboração, a comunicação e o senso de camaradagem entre os jogadores. "
            }
        ]
    },
    {
        enunciado: " Na sua opinião, a melhor parte do voleibol é:",
        alternativas: [
            {
                texto: "Fazer bloqueios decisivos   ",
                afirmacao: " Aumento da concentração e reflexos:* A necessidade de reações rápidas e decisões estratégicas durante o jogo ajuda a aprimorar a concentração e os reflexos dos praticantes."
            },
            {
                texto: " Realizar defesas incríveis  ",
                afirmacao: " Pressão competitiva:* Em níveis competitivos, a pressão para alcançar desempenhos elevados e a competitividade intensa podem ser estressantes para alguns jogadores."
            }
        ]
    },
    {
        enunciado: "Como você descreveria seu estilo de jogo no vôlei? ",
        alternativas: [
            {
                texto: " Estratégico e calculista  ",
                afirmacao: "Dependência do trabalho em equipe:* Como um esporte de equipe, o desempenho individual muitas vezes depende da colaboração e eficácia de todos os membros da equipe, o que pode ser uma desvantagem se houver falta de coesão ou comunicação. "
            },
            {
                texto: " Ágil e instintivo  ",
                afirmacao: " Promoção do espírito competitivo saudável:* Participar de partidas de vôlei incentiva a competição de maneira positiva, ensinando os jogadores a lidar com vitórias e derrotas de forma equilibrada."
            }
        ]
    },
    {
        enunciado: " Quando joga vôlei, você prefere:",
        alternativas: [
            {
                texto: " Jogar em equipe ",
                afirmacao: " Complexidade das regras:* Para novos jogadores, entender e aplicar corretamente as regras do voleibol pode ser um desafio, o que pode afetar a experiência inicial no esporte."
            },
            {
                texto: " Destacar-se individualmente ",
                afirmacao: " Oportunidade de socialização:* Além dos benefícios físicos, o vôlei oferece uma excelente oportunidade para fazer novas amizades e interagir socialmente com pessoas que compartilham o mesmo interesse pelo esporte. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Vantagens e desvantagens do volei";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();