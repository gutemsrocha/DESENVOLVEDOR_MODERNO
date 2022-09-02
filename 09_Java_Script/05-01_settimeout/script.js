// ### JavaScript - setTimeout ###
// Capítulo: 05-01 (SET TIME OUT)

function dizerOla() {
	console.log('Olá');
}

//Desta forma será exibido no console.log a palacra "Olá"
//dizerOla();

//Agora iremos colocar esta função "dizerOla()" dentro do setTimeou

//Iremos chamar o setTimeout(arg0, arg1)
//arg0 => Iremos chamar a função dizerOla "NÃO É COM OS PARENTESES."
//Pois quando passamos uma função como argumento passamos apenas a referência ou o nome da mesma.
//arg1 => Quantos milissegungos eu quero esperar para que a função seja executada.
//Por exemplo 2000 millesegundos = 2 segundos.

//Ficando assim:

setTimeout(dizerOla, 2000);

//Agora iremos inserir dois outros console.log() abaixo
//para mostrarmos que o PROCESSAMENTO ASSINCRONO CONTINUA EXECUTANDO O SCRIPT e DEPOIS
//ELE EXECUTA O DESEJADO.

//NESTE EXEMPLO IREMOS CONSTATAR QUE O CONSOLE.LOG IRÁ EXECUTAR O "A E O B" e SÓ EM SEGUIDA IRÁ
//IMPRIMIR NA TELA O "Olá"

console.log('A');
console.log('B');

//Observe que esta função "dizerOla()" não tem argumentos.
//Como ficaria para passar uma função no "setTimeout" que contenha argumentos?

//Abaixo veremos a função chamada "bomDia(arg0)" que receberá
//como argumento o nome de alguém. Por exemplo Maria.

function dizerBomDia(name) {
	console.log('Bom dia ' + name);
}

// Como seria o setTimeout da função dizerBomDia?

setTimeout(() => {
	dizerBomDia('Maria');
}, 2000);

console.log('C');
console.log('D');

//Observe que ha uma função lambda que não recebe argumentos e tem um corpo: "() => { corpoda função }"
// Dessa forma podemos colocar uma lógica qualquer dentro deste corpo da função que não recebe argumentos.
// Por exemplo:

/*

setTimeout(() => {
	dizerBomDia("Maria");
}, timeout);

*/

// E no argumento "timeout" =>  Inserir o tempo em milissegungos que quero esperar para que a função seja executada.
//Por exemplo 2000 millesegundos = 2 segundos.

//Observe que na ordem da leitura do script é lido:
/* 
1º) É lido a função ASSÍNCRONA dizerOla
2º) Os consoles.log (A e B)
3º) Função ASSÍNCRONA dizerBomDia()
4º) Os consoles.log (C e D)

Porem ele imprime na tela os dois consoles log (A e B) e (C e D)
e após o tempo de 2000 milessegundos ou 2 segungos imprime as duas 
funções Assíncronas: dizerOla e dizerBomDia
*/

//RESUMO:

/* Para utilizar a função setTimeout com uma função com argumentos, basta abrir uma função
ANÔNIMA sem argumentos e dentro do corpo se coloca toda a lógica a ser executada após o tempo 
configurado no argumento TIMEOUT.*/

// COMO FAZER PARA DIZER BOM DIA PARA 3 PESSOAS DIFERENTES APÓS 1 SEGUNDO CADA.
//Ou seja... Para a Mria depois de 1 segundo para o João e depois de 1 segundo para a Ama

//BASTA DESENCADEAR O "setTimeou" ou seja (um dentro do outro), ASSIM:

setTimeout(() => {
	dizerBomDia('Maria');
	setTimeout(() => {
		dizerBomDia('João');
		setTimeout(() => {
			dizerBomDia('Ana');
		}, 2000);
	}, 2000);
}, 2000);

console.log("E");
console.log("F");

// E COMO FAZER UMA ESPERA SÍNCRONA - O PROGRAMA FICA PARADO AGUARDANDO O 
//COMANDO SÍNCRONO SER EXECUTADO PARA CONTINUAR RODANDO.

//*****ISTO NÃO É RECOMENDÁVEL PORQUE TRAVA A APLICAÇÃO */