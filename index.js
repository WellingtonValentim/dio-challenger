// Classificador de nível de herói baseado em XP

function classificarNivel(xp) {
    let nivel;
    
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }
    
    return nivel;
}

function exibirHeroi(nomeHeroi, xpHeroi) {
    const nivel = classificarNivel(xpHeroi);
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
}

// Exemplo de uso
let nomeDoHeroi = "Arthur";
let experienciaDoHeroi = 7500;

exibirHeroi(nomeDoHeroi, experienciaDoHeroi);

console.log("\n--- Testando outros heróis ---");

// Lista de heróis para teste
const herois = [
    { nome: "Lancelot", xp: 500 },
    { nome: "Gawain", xp: 1500 },
    { nome: "Percival", xp: 3500 },
    { nome: "Galahad", xp: 6200 },
    { nome: "Tristan", xp: 7800 },
    { nome: "Gareth", xp: 8500 },
    { nome: "Bedivere", xp: 9500 },
    { nome: "Merlin", xp: 15000 }
];

// Testando todos os heróis
for (let i = 0; i < herois.length; i++) {
    exibirHeroi(herois[i].nome, herois[i].xp);
}


