//Java Script - ASYNC AWAIT
//CAPÍTULO:05-04 (ASYNC AWAIT)

//01001000
// const cep = '01001000';

//OBSERVAÇÃO:
// O FETCH() faz um "GET" no http que será passado no argumento de sua função.
// O "GET" É COMO SE ESTIVÉSSEMOS ESCREVENDO ESTA URL NO NAVEGADOR.

//QUANDO CHAMAMOS UMA FUNÇÃO "fetch()" O RETORNO DELA É UM PROMISE E ELA É ASSÍNCRONA.
//A promisse não é resolvida instantaneamente de forma Sincrona, tanto é que, neste exemplo,
//imediatamente após fazermos o fetch e executarmos o console.log em seguida. O Console mostra
//que o estado Promise ainda é pendente e depois de um certo tempo ela informa a resolução da fetch
//com o estado "fulfilled"

//const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

//console.log(fetchResult);

//COMO FAZER PARA PEGAR O RESULTADO DESTA PROMISSE.

//Iremos utilizar a função ".then"
//Conforme vímos anteriormente o fetch gera uma "Promise"
//Então pegaremos o "fetchResult" e aplicaremos a esta a função ".then"
//A função ".then" irá capturar o resultado da Promise quando RESOLVIDA. Vejamos abaixo:
/*

fetchResult.then(value => {
    console.log(value);
});

*/
//Desta forma é impresso no Console somente objeto da resposta.
//Só que o que eu quero são os dados do CEP e não todo o objeto.

//AÍ É QUE ENTRA A FETCH API

//A FETCH API - Nos disponibiliza uma função para acessarmos o corpo de uma resposta de uma requisição.
// pegarmos o "value" e aplicarmo um "." após ele, iremos ver um conjuntos de funções que poderá ser
//atribuídas a ele para fins diferentes como por exemplo:
// ".headers" => Para pegar o cabeçálho da resposta.
// ".json" => Para pegar o JSON que veio no corpo da resposta. No formato JSON.
// ".text" => Pra pegar o corpo da resposta só que no formato de texto plano.

// Entre outras funções. É por isso que se chama API, pelo fato de ter uma biblioteca de funções disponíveis.





const cep = '01001000';

//1º) Chamando a fetch API
const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

//2) Aqui temos o resultado da requisição.
    //2.1) Quando este resultado for resolvido, iremos para o ".then" ou
         //Se o resultado for rejeitado, iremos para o ".catch"   
fetchResult
    //PARA A CONDIÇÃO: RESOLVIDO
	.then((response) => {
        //Imprime na tela
		console.log('SUCESSO NO FETCH ', response);
		//3º) CHAMO O "response.json" PARA PEGAR O CORPO DA RESPOSTA NO FORMATO JSON.
           //3.1) Quando o resultado for resolvido iremos para o "json.then"
                //Se o resultado for rejeitado, iremos para o "json.catch"
        const json = response.json();
		json
            //PARA CONDIÇÃO: RESOLVIDO
			.then((result) => {
                //Imprime na tela o JSON no formato jon
				console.log('SUCESSO NO JSON', result);
			})
            //PARA CONDIÇÃO: REJEITADO
			.catch((error) => {
                //Imprime a mensage de erro na tela.
				console.log('ERRO NO JSON ', error);
			});
	})
    //PARA CONDIÇÃO: FETCH REJEITADO
	.catch((error) => {
        //Imprime a mensage de erro na tela.
		console.log('ERRO NO FETCH ', error);
	});

    //PARA DEMONSTRAR QUE O FUNCIONAMENTO DO FETCH É ASSINCONO,
    // IREMOS EXECUTAR OUTROS CONSOLES.LOG PARA SIMULAR OUTRAS LINHAS DE
    // COMANDO APÓS O FETCH. COM ISTO ESTAS OUTRAS LINHAS DEVEM SER EXECUTADAS
    // ENQUANTO O FETCH É PROCESSADO.
    
    console.log("A");
    console.log("B");

//OBSERVE QUE O RESULTADO DA FUNÇÃO ".json()" É UMA RESPOSTA ASSÍNCRONA.
//ENTÃO PARA PEGARMOS O RESULTADO DESTA PROMISSE?
// TEMOS QUE FAZER UM ".THEM" DENTRO DELA. (Observe linha 51)

