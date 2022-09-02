//Java Script - ASYNC AWAIT
//CAPÍTULO:05-03 (ASYNC AWAIT)

//ASYNC AWAIT

/*
É uma forma "syntactic sugar" de se obter a mesma ação da "Promise". 
Implica em realizar uma chamada assincrona e enquanto esta é processada continuar executando 
os códigos seguintes até a resolução da mesma.

É o mesmo princípio, porém veio para facilitar e simplificar a escrita e a forma de lhe dar com esta
funcionalidade.

Por exemplo:

Na aula passada, vimos que ao executarmos o FETCH foi necessário aplicar as funções:
".then()" e ".catch()" encadeadas e dentro da função ".then()" do catch outras duas funções ".then()"
e ".catch" referente a obtenção da resposta no formato JSON.

Dependendo da situação pode ficar muito complicado fazer a leitura de um código encadeado desta forma.
O objetivo é deixar o código mais linear, legível, e bem melhor, principalmente se não houver a necessidade de
ficar tratando vários "catchs".
*/

const cep = '01001000';

const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

async function getJsonResponse(url) {
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
}

getJsonResponse(`https://viacep.com.br/ws/${cep}/json/`)
    .then(result => {
        console.log("PRIMEIRA FORMA: ",result);
    });


async function showCepData(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const json = await getJsonResponse(url);
    console.log("SEGUNDA FORMA: ", json);

}

showCepData('01001000');

console.log("A");
console.log("B");