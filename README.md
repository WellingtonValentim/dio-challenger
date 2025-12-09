# Classificador de Nível de Herói

Desafio da DIO para praticar conceitos básicos de programação em JavaScript.

## Sobre

Este projeto classifica o nível de um herói baseado na sua experiência (XP).

## Conceitos Utilizados

- Variáveis
- Operadores
- Estruturas de Decisão
- Laços de Repetição
- Funções

## Tabela de Classificação

| Nível | Faixa de XP |
|-------|-------------|
| Ferro | Menor que 1.000 |
| Bronze | 1.001 - 2.000 |
| Prata | 2.001 - 5.000 |
| Ouro | 5.001 - 7.000 |
| Platina | 7.001 - 8.000 |
| Ascendente | 8.001 - 9.000 |
| Imortal | 9.001 - 10.000 |
| Radiante | 10.001 ou mais |

## Como usar

### Execução básica
```bash
# Execução direta
node index.js

# Ou usando npm
npm start
```

### Testando com diferentes valores

Edite as variáveis no arquivo `index.js`:
```javascript
let nomeDoHeroi = "SeuHeroi";
let experienciaDoHeroi = 5500;  // Altere este valor
```

### Teste rápido via terminal
```bash
node -e "
function classificarNivel(xp) {
    if (xp < 1000) return 'Ferro';
    else if (xp <= 2000) return 'Bronze';
    else if (xp <= 5000) return 'Prata';
    else if (xp <= 7000) return 'Ouro';
    else if (xp <= 8000) return 'Platina';
    else if (xp <= 9000) return 'Ascendente';
    else if (xp <= 10000) return 'Imortal';
    else return 'Radiante';
}
console.log('Teste XP 2500:', classificarNivel(2500));
"
```

## Saída

O programa exibe: "O Herói de nome {nome} está no nível de {nivel}"

## Exemplo

```javascript
let nomeDoHeroi = "Arthur";
let experienciaDoHeroi = 7500;
// Saída: "O Herói de nome Arthur está no nível de Platina"
```