//Java Script - PROMISE
//CAPÍTULO:05-02 (PROMISE)

/*
Se digitarmos direto no console "Promise.prototype", iremos perceber
que a "Promisse" é uma função construtora que tem algumas funções em
seu prototype.

Dentre elas, as principais que iremos ver são: "catch" e "then".

A "Promise" recebe uma função "f" como argumento. Vejamos:

//
//function f(g, h) {
	if (10 > 0) {
		g('P');
	} else {
		h('Q');
	}
} 


 ### SEGUIR PARA O ÍTEM PASSO 2 ###



function executarSeResolver(valor){
    console.log("Resolveu com o valor " + valor);
}

function executarSeRejeitar(valor){
    console.log("Rejeitada com o valor " + valor);
}

const minhaPromise = new Promise(
	f
);
//
// ### PASSO 3)
 O que isto significa?
Significa que após a minhaPromise ser instanciada, podemos fazer assim.

minhaPromise.then passando como argumento a função executar se resolver conforme abaixo: 

minhaPromise.then(executarSeResolver);

 Desta forma será impresso no console.log a mensagem "Resolveu com o valor P"

PORÉM ESTA NÃO É A FORMA CORRETA DE DECLARAR ESTA FUNÇÃO.
VEJAMOS ABAIXO A FORMA CORRETA:


minhaPromise.then(valor => {
    console.log("Resolveu com o valor "+ valor);
});


 Da mesma forma o métódo ".catch" caso o resultado do teste dê falso e o resultado da promise seja rejeitado.

minhaPromise.catch(executarSeRejeitar);

 Desta forma será impresso no console.log a mensagem "Rejeitada com o valor Q"

PORÉM ESTA NÃO É A FORMA CORRETA DE DECLARAR ESTA FUNÇÃO.
VEJAMOS ABAIXO A FORMA CORRETA:


minhaPromise.catch(valor =>{
    console.log("Rejeitada com o valor "+ valor);
});


 OBSERVE QUE DESTA FORMA O CONSOLE EXIBE A MENSAGEM "UNCAUGHT" - TARJA VERMELHA.
 PARA QUE ESSE AVISO NÃO SEJA EXIBIDO, BASTA ENCADEADO O THEN COM O CATCH.

minhaPromise
	.then((valor) => {
		console.log('Resolveu o valor ' + valor);
	})
	.catch((valor) => {
		console.log('Rejeitada com o valor ' + valor);
	});

 IR PARA O PASSO 4)

 ### PASSO 2)

Se executarmos a chamada da constante "minhaPromise" no Console
 Iremos perceber que ela foi instanciada com  o estado "Pendente = Pending"
 E o seu resultado está como "Indefinido = Undefined";

 Por que?

 Porque a função "f" está vazia. Não tem nada e para que a Promise se comporte
de uma forma completa, ela precisa cumprir com algumas regras.

1ª) A função "f" precisa ter DUAS OUTRAS FUNÇÕES COMO ARGUMENTOS "g" e "h".
2º) Se durante a execução da lógica da função "f" a função "g" for chamada com o argumento "p" opcional,
então o estado da promise mudará para "fullfilled = resolvida".
3º) Então o resultado da promise será o valor "P".

 Agora iremos acrescentar no corpo da função "f" a função "g" que receberá um "P" como argumento. Vejamos:
Em seguida ao chamarmos "minhaPromise" no Console, iremos perceber que o estado mudou para "fulfilled"
 e o valor mudou para "P".

Agora iremos trocar a função "g("P")" pela função "h("Q")" função "h" Que recebe um argumento "Q".

Neste momento o Console irá aprensentar uma mensagem "Uncaught" que signiica que a promise foi rejeitada.
 Se executarmos no Console a chamada minhaPromisse iremos perceber que ela mostra o estado rejeitado e o resultado "Q".

Agora iremos fazer dentro do corpo da função "f" uma lógica "pedagógica" para testar
Se o resultado da lógica for verdadeiro chamará a função g(P) caso seja falso  chamara a
função h("Q")

Vejamos lá na função "f":

 Ficando assim:


function f(g, h){
    if(10 > 0){
        g("P");
    } else {
        h("Q");
    }
}


Nesta condição, se chamarmos minhaPromise no Console, iremos perceber que o estado sera "fulfilled" e o resultado será "P".
Suponha agora que a condição seja falsa, conforme abaixo:

function f(g, h){
    if(10 < 0){
        g("P");
    } else {
        h("Q");
    }
}
O Consoel apresentará a mensagem Uncaught e se chamarmos a minhaPromise iremos perceber que o estado será "refected"
e o resultado "Q".

O método then de uma promise recebe como argumento uma função, e executa esta função passando o valor P para ela, quando a promise for resolvida.

 SUBIR PARA O ITEM ### PASSO 3 ### ABAIXO DA INSTANCIA DA "minhaPromise"


Explicação "estrutural"
Promise recebe uma função f como argumento.

Esta função f por sua vez recebe como argumento duas funções g e h (opcional).

Se durante a execução da lógica da função f, a função g for chamada com o argumento P (opcional), então o estado da promise mudará para "fulfilled" (resolvida), e o resultado da promise será o valor P.

Se durante a execução da lógica da função f, a função h for chamada com o argumento Q (opcional), então o estado da promise mudará para "rejected" (rejeitada), e o resultado da promise será o valor Q.

O método then de uma promise recebe como argumento uma função, e executa esta função passando o valor P para ela, quando a promise for resolvida.

O método catch de uma promise recebe como argumento uma função, e execute esta função passando o valor Q para ela, quando a promise for rejeitada.
*/
/*

ENTENDENDO QUANDO UTILIZAR A "Promise"

 A utilização da "Promise" faz mais sentido quando associada a uma função assíncrona, uma ação que pode demorar
umpouco para ser resolvida.

 Para simular um comportamento assíncrono, iremos criar na função "f" que receberá um setTimeout para esta aplicação esperar umpouco.

 */

function f(g, h) {
	setTimeout(() => {
        //PARA O TESTE: 10 > 0 para RESOLVER
        //10 < 0 para REJEITAR
		if (10 < 0) {
			g('P');
		} else {
			h('Q');
		}
	}, 3000);
}

const minhaPromise = new Promise(f);

minhaPromise
    .then(valor => {
        console.log("Resolveu com o valor "+ valor);
    })
    .catch(valor => {
        console.log("Rejetado com o valor "+ valor);
    });

    console.log(minhaPromise);
