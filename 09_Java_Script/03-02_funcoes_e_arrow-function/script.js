// ### Java Script - FUNÇÔES ###
//Capítulo: 03-02 (FUNÇÕES)

//FUNÇÃO => DECLARAÇÃO PADRÃO
function soma1(num1, num2) {
    return num1 + num2;
}

//FUNÇÃO => DECLARADA COMO UMA CONSTANTE
//A função "function" agora é referenciada pela variável soma2.
const soma2 = function(num1, num2) {
    return num1 + num2;
}

// FUNÇÃO ANÔNIMA - Expressão Lambda
// Esta função irá receber como argumento dois números (num1 e num2)
// Não precisa da palavra "function"
// => (ARROW) indicando que esta função irá levar a operar o que estiver
// dentro do corpo { }.
const soma3 = (num1, num2) => {
    return num1 + num2;
}

// CONTINUANDO O CASO DA FUNÇÃO ANÔNIMA
// Quando dentro do corpo da função anônima houve apenas uma linha,
// conforme no exemplo "soma3", não é necessário montar o corpo da função 
// {  return num1 + num2;  }    ou seja
// pode-se colocar A EXPRESSÃO DE RETORNO, imediatamente a direita da flecha (arrow)
// Assim:
const soma4 = (num1, num2) => num1 + num2;

const dobro1 = function(num){
    return num * 2;
}

//FUNÇAO ANÔNIMA:
const dobro2 = num => num * 2;

// FUNÇÃO QUE RETORNA "UNDEFINED" - NÃO TEM "RETURN"

function mostrarPreco(preco){
    console.log("PRECO = ", preco)
}

// VARIÁVEIS DEFINIDAS DENTRO DO ESCOPO DA FUNÇÃO NÃO VAZAM ESCOPO

function areaCirculo(raio){
    const pi = 3.14;
    return pi * raio * raio;
}

// FUNCTION HOISTING: Funções no JS são "MOVIDAS" para cima pelo motor do JS.


function teste(x) {
    console.log("TESTE = " + x);
}


//FUNÇÕES DE ALTA ORDEM: Funções que podem ser passadas como argumento.

// E TAMBÉM PODEM SER RETORNADAS COMO RETORNO DE FUNÇÕES.
// Uma FUNÇÃO pode RETORNAR uma outra FUNÇÃO.

function triplo(num) {
    return num * 3;
}

function aplicar(f, num){
    const result = f(num);
    console.log("RESULTADO = " + result);
}

aplicar(triplo, 10);
aplicar(dobro1, 10);


