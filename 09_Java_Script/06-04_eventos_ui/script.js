//Java Script - EVENTOS UI
//CAPÍTULO:06-04 (EVENTOS UI)

//O QUE É UM EVENTO?

//O Evento de um Componente de Sistema é uma ação que ele dispara quando acontecer alguma coisa específica que você quiser.
//No caso dos componentes do HTML, todos os elementos são construídos com eventos padrões.
//Os inputs tem vários eventos que podem ser disparados, assim como o botão, a própria janela também tem eventos etc.

//Aqui segue um link da w3schools que aborda vários tipos de eventos:

//   https://www.w3schools.com/js/js_events_examples.asp

//COMO FAZER PARA ATRIBUIR UM EVENTO A UM ELEMENTO HTML?

//Suponha que eu queria pegar ou selecionar o input do nome.
//1º Passo => Criar uma variável do inputName

// const inputName = document

//2º Passo => Após o "document" existem várias possibilidades de selecionar o elemento:
//querySelector
//getElementsByClassName
//getElementById

//Porém como neste caso se trata de capturar um elemento de um formulário,
//podemos utilizar a função ".forms"

// const inputName = document.forms

//3º Passo => Após o forms devemos colocar um ". + o nome do formulário que vc quer capturar"
//Neste caso será ".cadastro" Ficando assim:

// const inputName = document.forms.cadastro

//4° Passo => Após o cadastro devemos colocar o "nome do elemento que está dentro do formulário"
//que queremos utilizar. Ficando assim:

//const inputName = document.forms.cadastro.name

//Para testarmos se o código acima realmente capturou o elemento correto, utilizaremos o console.log.

//console.log(inputName);

//5º Passo => IMPORTANTÍSSIMO (Aplicando o Evento)

//PROGRAMAR EVENTOS É INSCREVER FUNÇÕES PARA SEREM EXECUTADAS QUANDO O EVENTO OCORRER.
//É INSCREVER FUNÇÕES NO EVENTO.



//Por exemplo:
/*

function teste(){
    console.log("A");
}

*/
//EU QUERO RODAR A FUNÇÃO TESTE QUANDO ACONTECER UM CERTO EVENTO NO "inputName"
//COMO FAZER ISTO:

//1º Passo =>  Devemos chamar o nome do elemento visual o "inputName" neste caso.

// inputName

//2º Passo => Em seguida, devemos chamar a função ".addEventListener(arg0, arg1)" . Ficando assim:
//Onde:
//O "arg0" irá receber o nome do evento a ser aplicado.
//O "arg1" => É qual será a função que você quer inscrever.

//Neste exemplo como "arg0" iremos utilizar o evento 'keyup' que o que acontece quando levantamos uma tecla
//quando se está digitando.

//Como "arg1" iremos referenciar a função teste para ser executada no quando o evento acontecer.

// inputName.addEventListener(arg0, arg1)

//inputName.addEventListener('keyup', teste);

/*
const inputName = document.forms.cadastro.name;

function handleInputNameKeyUp(event) {
	console.log(event.target.value);
}

inputName.addEventListener('keyup', handleInputNameKeyUp);

*/
//AGORA IREMOS ALTERAR O CÓDIGO. IREMOS CAPTURAR O CÓDIGO DIGITADO NA CAIXINHA (input)

//OBSERVAÇÃO IMPORTANTE

//A FUNÇÃO QUE INSCREVEMOS NO EVENTO RECEBE UM ARGUMENTO. NO EXEMPLO ACIMA:
// teste(arg0)

//Aqui no arg0 => Iremos passar o valor "event"
//Dentro do console.log("event.target")
//Target é destino ou alvo... Ou seja, é o componente que disparou o evento.
//Após o target, iremos aplicar a função ".value" => Que irá capturar o valor que foi digitado
//dentro da caixa do input Vejamos




// OUTROS EXEMPLOS DE EVENTOS.

//EVENTO CHANGE => Acontece quando se altera o valor do input.

//Iremos pegar agora o campo "e-mail" do nosso input.
/*

const inputEmail = document.forms.cadastro.email;

inputEmail.addEventListener('change', handleInputEmailChange);

function handleInputEmailChange(event) {
	if(validateEmail(event.target.value)){
        event.target.classList.remove("input-error");
    }
    else{
        event.target.classList.add("input-error");
    }
}

*/
// Este evento é muito útil para fazer validação de formulário.
// Por exemplo. Após digitar o e-mail eu preciso testar se o e-mail é válido ou não.

// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
/*

function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
  */























  // CÓDIGO COMPLETO

const inputName = document.forms.cadastro.name;
inputName.addEventListener('keyup', handleInputNameKeyup);

const inputEmail = document.forms.cadastro.email;
inputEmail.addEventListener('change', handleInputEmailChange);

const btnSubmit = document.querySelector('[type="submit"]');

btnSubmit.addEventListener('click', handleBtnSubmitClick);

function handleInputNameKeyup(event) {
	console.log(event.target.value);
}

function handleInputEmailChange(event) {
	if (validateEmail(event.target.value)) {
		event.target.classList.remove('input-error');
	} else {
		event.target.classList.add('input-error');
	}
}

function handleBtnSubmitClick(event) {
	event.preventDefault();
	console.log(`Dados: ${inputName.value}, ${inputEmail.value}`);
}

// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
function validateEmail(email) {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
}
