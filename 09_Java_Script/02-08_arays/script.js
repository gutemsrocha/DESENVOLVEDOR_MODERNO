//MÓDULO: JS
//Capítulo: 02-08 (ARRAYS)

// ### TAMANHO DO ARRAY .length() ###
const valores = [ 'Maria', 37, false, 1.64 ];
const t1 = valores.length;
console.log('Teste .length():');
console.log(t1);

// ### REMOVER ELEMENTOS NO ARRAY ###
const nomes = [ 'Maria', 'João', 'Ana', 'Marcos' ];

//Função ".pop()"  -> Remove o ultimo elemento do ARRAY que neste exemplo é o Marcos
// e retorna este elemento.
const r1 = nomes.pop();
console.log('Teste .pop():');
console.log(r1);

//Função ".shift()"  -> Remove o primeiro elemento do ARRAY que neste caso é a Maria
// e retorna este elemento.
const r2 = nomes.shift();
console.log('Teste .shift():');
console.log(r2);
console.log(nomes);

// ### INSERIR ELEMENTOS NO ARRAY ###
const alturas = [ 1.65, 1.82, 1.7 ];

console.log('Teste: .push() e .unshift():');
//Função ".push(arg0)"  -> Insere o valor referente ao arg1 no FINAL do Vetor = Array
alturas.push(1.75);
console.log('Teste .push(): ');
console.log(alturas);

//Função ".unshift(arg0)"  -> Insere o valor referente ao arg1 no INÍCIO do Vetor = Array
alturas.unshift(1.58);
console.log('Teste .unshift(): ');
console.log(alturas);

// ### INSERIR OU REMOR GERAL NO ARRAY ### "Em qualquer lugar" .splice(arg0, arg1)
//"arg0"  -> É o START, ou seja, a posição inicial.
//Por exemplo: no campo arg0 iremos utilizar a posição 2
//"arg1"  -> É o DELETE COUNT, ou seja, é a quantidade de elementos que queremos deletar.
//Por exemplo: no campo arg1 iremos utilizar 3 elementos.

const letras = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
letras.splice(2, 3);
// Então a partir da posição 2 será removido 3 elementos.
// Ou seja, os elementos:  "C", "D", "E", serão removidos do array.
// Permanecendo apenas o "A", "B","F" no array.
console.log('Teste .splice()');
console.log(letras);

/*NESTE EXEMPLO ABAIXO, O .splice() está removendo os elementos:  "C", "D", "E" e
acrescentando os elementos: "X", "Y", "Z" .*/
letras.splice(2, 3, 'X', 'Y', 'Z');
console.log(letras);

//AGORA SUPONHA QUE EU QUEIRA ADICIONAR ELEMENTOS A PARTIR DA LETRA B, SEM ELIMINAR
//ALGUM ELEMENTO.

//BASTA NO LUGAR DO "arg1", ou seja, NO LUGAR DO "3", COLOCAR UM ZERO "0".
//COM ISSO, "X", "Y", "Z", SERÃO ADICIONADOS A PARTIR DA SEGUNDA POSIÇÃO,
//QUE NESTE CASO NO LUGAR DA LETRA "C"

const letras1 = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
letras1.splice(2, 0, 'X', 'Y', 'Z');
console.log(letras1);

// ### CONCATENAR  ARRAYS  ###
// Juntar DOIS arrays em UM só.

//Função ".concat(arg0)"
//Onde o "arg0" recebe o array que se deseja concatenar ao primeiro, conforme exemplo:
const meninas = [ 'Maria', 'Ana' ];
const meninos = [ 'João', 'Marcos' ];

const todos = meninas.concat(meninos);
console.log('Teste .concat():');
console.log(todos);

// ### ACESSO E ATRIBUIÇÃO ###

// SUPONHA QUE NA POSIÇÃO 1, QUE NESTE EXEMPLO SE REFERE AO NÚMERO 30, TENHAMOS QUE ATRIBUIR
// UM VALOR DE 38.
const idades = [ '20', '30', '40', '50' ];

idades[1] = '38';
console.log(idades);

//PERCORRENDO UM ARRAY - Forma normal (Padrão)
const frutas = [ 'banana', 'laranja', 'uva' ];

console.log('Teste Percorrer Array:');
for (let i = 0; i < frutas.length; i++) {
	console.log(frutas[i]);
}

// PERCORRENDO UM ARRAY - For each (Função de alta ordem)

//SINTAXE:
/*
 nome_do_array.forEach(item => {
    console.log(item)
        });               */

//Função de Alta Ordem é uma função que pode receber uma outra função e
//Inclusive pode retornar uma função.

console.log('Percorrendo o Array com o FOR EACH - Função de Alta Ordem:');
frutas.forEach((item) => {
	console.log(item);
});
