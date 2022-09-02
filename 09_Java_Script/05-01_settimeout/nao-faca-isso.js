
// PARA DEMONSTRAR O FUNCIONAMENTO DE UMA FUNÇÃO SÍNCRONA, IREMOS:
// Criar uma função "esperar(arg0){ corpo da função}", onde:
	// o arg0 = ms => que vai receber um valor em milessegundos

//No corpo da função irá entrar:
	// Uma constante chamada fim que irá receber:
		// O "Date.now()" que é uma função que pega o momento atual em milissegundos
		// a partir da data de 01/01/1970 as 00hs
		// Este valor será somado ao "ms" que nós atribuirmos.
		
		
// Ou seja, o objetivo desta função é "ESPERAR" o tanto de tempo que configurarmos
// para aí sim executar e liberar a continuidade do funcionamento da aplicação.

function esperar(ms){
	const fim = Date.now() + ms;

	//Enquanto o momento atual for menor que o tempo do fim estabelecido pelo "ms" acima
	//a aplicação ficará parada. Não executará nada, conforme o corpo da função "while".
		while(Date.now() < fim){

	}
}

// PARA TESTAR, iremos:

//1º) Executar um console.log("A") => Aqui irá imprimir a letra A
//2º) Executar a função "esperar(2000)" => Tempo no qual o sistema ficará aguardando a execução desta função.
//3º Em seguida console.loc("B") => Aqui irá imprimir a letra B após o tempo de 2000ms anterior.

console.log("A");
esperar(5000);
console.log("B");


// CONCLUSÃO: A ESPERA SINCRONA É UM RECURSO INDESEJÁVEL POIS TRAVA TODA A APLICAÇÃO DURANTE O TEMPO CONFIGURADO NA FUNÇÃO.


