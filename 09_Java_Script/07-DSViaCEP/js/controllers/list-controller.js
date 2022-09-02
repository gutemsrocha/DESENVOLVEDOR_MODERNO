function State() {
	this.listSection = null;
}

const state = new State();

//FUNÇÃO PARA INICIAR O COMPONENTE LIST CONTROLER.
export function init() {
	state.listSection = document.querySelector('#list-section');
}

//FUNÇÃO PARA ADICIONAR O CARD NA TELA.
export function addCard(address) {
	const card = createCard(address);
	state.listSection.appendChild(card);
}

//FUNÇÃO PARA CRIAR O CARD
function createCard(address) {
	//1º FUNÇÃO DA função "createCard(address)"
	//Cria um elemento "div"
	const div = document.createElement('div');
	//2ª FUNÇÃO: cria uma Classe chamada "card-list-item"
	//div => chama o "div" acima criado
	//".classLIst.add" => cria a classe no div criado conforme especificado entre parênteses ("card-list-item");
	div.classList.add('card-list-item');
	//3ª FUNÇÃO: criar um elemento "H3"
	const h3 = document.createElement('h3');
	//h3 => chama o "h3" acima criado
	//innerHTML = insere um Texto dentro deste HTML criado
	//"= address.city" => Irá atribuir para o texto acima o nome da cidade que é importado via "address.city".
	h3.innerHTML = address.city;

	//4ª FUNÇÃO: Criar o primeiro elemento "p" referente ao Logradouro.
	const line = document.createElement('p');
	line.classList.add('adress-line');
	line.innerHTML = `${address.street}, ${address.number}`;

	//5ª FUNÇÃO: Criar o segundo elemento "p" referente ao CEP.
	const cep = document.createElement('p');
	cep.classList.add('adress-cep');
	cep.innerHTML = address.cep;

	//6ª FUNÇÃO: JUNTAR TODOS ESSES ELEMENTOS DENTRO DA "div" QUE CRIAMOS NO PASSO 1.
	//"div" => chama a "div" criada no passo 1
	//"appendChild(arg0)" => Cria os filhos dentro da div ond o "arg0" é o elemento a ser criado.
	// no caso são: (h3), (line) e (cep).
	div.appendChild(h3);
	div.appendChild(line);
	div.appendChild(cep);

	//7º PASSO: Retornar esta "div".
	//Então passando o endereço, esta função irá retornar um elemento HTML para acrescentarmos em nosso DOM.
	return div;
}
