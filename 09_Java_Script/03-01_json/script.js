// ### JavaScript - JSON ###
// Capítulo: 03-01 (JSON)


www.json.org

https: const obj1 = {
	name: 'Computador',
	price: 50.9,
	'due-date': '2025-04-15'
};

const obj2 = {
	name: 'Computador',
	price: 50.9,
	'due-date': '2025-04-15'
};

const obj3 = {
	id: 53,
	date: '2021-10-20',
	items: [
		{
			description: 'Celular',
			price: 1499.99,
			quantity: 1
		},
		{
			description: 'Mouse',
			price: 100.0,
			quantity: 2
		}
	],
	client: {
		name: 'Maria Red',
		email: 'maria@gmail.com',
		active: true
	}
};

console.log(obj1);
console.log(obj2);
console.log(obj3);

console.log(obj3.id);
console.log(obj3.client);
console.log(obj3.client.name);


// ### PARSE / STRINGFY   ###

// O JSON pode vir como resposta de uma requisição na forma de texto.
// Este texto em primeira mão é uma String.
// Para que o Java Script converta este objeto em um objeto no padrão Java Script, É NECESSÁRIO
// FAZER O "Parse" DESTE STRING.


// OBSERVE QUE NA VARIÁVEL ABAIXO, "const txt", temos um JSON no formato de texto, entre CRASES.
// Todos os elementos estão entre aspas.
// Se mandarmos imprimir no console, o mesmo irá ser exibido na forma de STRING.
// Não é um objeto estruturado.
// Se executarmos a função ".typeof" por exemplo. O Console irá retornar que se trata de uma STRING.
// Não é um OBJETO.

//Como fazer para converter este TEXTO "abaixo" para OBJETO EQUIVALENTE DO JAVA SCRIPT?   É MUITO FÁCIL, VEJA:
const txt = `{"nome": "Computador", "price": 50.9, "due-date": "2025-04-15"}`;

// const obj = JSON.parse(txt)
// const obj -> A nova variável que irá receber o Texto convertido em Objeto
// JSON "em maiúsculo"".parse(arg0)" => Onde o "arg0" é a variável txt que contem o String que será convertido

const obj = JSON.parse(txt);

// Após fazer este procedimento, o objeto "obj", agora é um OBJETO ESTRUTURADO padrão Java Script
// Ao lê-lo no console.log, podemos verificar os elementos, expandi-los etc. 

// Observe que ao selecionarmos o atributo "name" da variável "txt" o console log retorna como indefinido.
console.log(txt.name);

// Por outro lado, ao acessarmos agora o objeto "obj", o Console irá enxerga-lo como um Objeto estruturado
// possibilitando acesso ao conteúdo do mesmo.
console.log(obj.nome);
// Inclusive agora, conseguimos acessar outros dados como por exemplo:
// "obj.price" , "obj.due-date" , etc.


// PARA CONVERTER UM OBJETO ESTRUTURADO DO Java Script em JSON NA FORMA DE TEXTO

// Suponha que seja necessário mandar esta informação no corpo de uma requisição.

// Como fazer esta conversão?

const text = JSON.stringify(obj);

//"const text" => Variável que irá receber o JSON no formato texto
//JSON.stringify(obj) => JSON "em maiúsculo" ".stringify(arg)"
// Onde o "arg0" => É a variável que contem o OBJETO ESTRUTURADO Java Script que será
//convertido em JSON no formato Texto.
