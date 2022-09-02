// MÓDULO: Java Script (Rest & Spread)
// Capítulo: 03-05 - Rest e Spread

// REST: valores passados com virgula => array

//Repare que o "numbers" que está sendo utilizado como argumento da função "sum" está com o rest que é exatamente os 3 pontinhos antes de numbers "...numbers".

//Esses "..." nos indica que este numbers SERÁ UM VETOR.
//Repare que no for abaixo existe:
//a) o "numbers.length"
//b) o "numbers[i]"
// Ou seja, estamos operando o number exatamente como um vetor.
// E na função sum, temos uma variável total que começa com 0,
// O for faz a soma acumulativa e retorna no final.

function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}
//Aqui a variável result1 recebe a soma de 1,2,3,4
const result1 = sum(1, 2, 3, 4);
console.log(result1);

const result2 = Math.max(2, 5, 9, 3);
//O Math.max recebe um vetor de números passando o maior valor entre eles.
console.log(result2);
//Aqui o console.log exibirá: 9

//OBSERVAÇÂO - QUANDO TEM O REST É OBRIGADO A PASSAR OS VALOR COM A VIRGULA SEM OS COLCHETES, COMO ARGUMENTO. ASSIM (2, 5, 9, 3), por exemplo. 

/* ****************************************** */

// SPREAD: array => valores separados por virgula
//O SPREAD - Pega o array e transforma em valores separados por vírgula.
const result3 = Math.max(4, 7, 2);
console.log(result3);

const myNumbers = [2, 3, 10, 5];

//const result4 = Math.max(myNumbers); // Nao funciona
const result4 = Math.max(...myNumbers);
console.log(result4);

// SPREAD: objeto => membros separados por virgula

const item = {
    description: "Celular",
    price: 1499.99,
    quantity: 1
};

const cloneItem = { ...item };
const cloneItemPlus = { ...item, weigth: 10 };