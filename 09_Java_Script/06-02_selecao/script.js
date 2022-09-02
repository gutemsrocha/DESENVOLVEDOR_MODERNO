//Java Script - SELEÇÃO
//CAPÍTULO:05-03 (SELEÇÃO)

const item1 = document.querySelector('li');
console.log(item1);
console.log(item1.innerHTML);
console.log(item1.outerHTML);

const items = document.querySelectorAll('li');
console.log(items);

const card1 = document.querySelector('.card');
console.log(card1);

const paragrafo = document.createElement('p');
paragrafo.innerHTML = 'Descrição';
card1.appendChild(paragrafo);

card1.classList.add('super-border');

const cards = document.querySelectorAll('.card');
console.log(cards);

const cards1 = document.getElementsByClassName('card');
console.log(cards1);

//OBSERVAÇÃO MUITO IMPORTANTE

// Vale ressaltar que esses tipos: NodeList e HTMLCollection, não são arrays, SÃO PARECIDOS COM ARRAY MAS NÃO SÃO.
//NÃO TEM A FUNÇÃO ".map()" POR EXEMPLO.

// Para utiliza-los como array é necessário fazer a conversão.

//Por exemplo: Para imprimir o "cards" na posição "0"
console.log(cards[0]);

//PARA APLICARMOS FUNÇÕES DE ARRAY, É NECESSÁRIO TRANSFORMA-LOS EM ARRAY.

//CONVERTENDO UM TIPO "NodeList" para "Array":

//1º FORMA)
//Array.from(cards) => Para GERAR UM ARRAY A PARTIR DO QUE ESTIVIER DENTRO DO PARÊNTESES.
//.map(+ função lambda) => Para cada item irá fazer o que estiver dentro do corpo {}
//Neste caso => console.log(item) => Aqui irá imprimir todos os itens do novo array.
Array.from(cards).map((item) => {
	console.log('1a forma:', item);
    console.log('1a forma: innerHTML: ', item.innerHTML);
});

//2ª FORMA)
//Também podemos utilizar o SPREAD [...cards1]   Veja:
[...cards1].map(item1 =>{
    console.log("2a forma: ",item1);
    console.log('2a forma: innerHTML: ', item1.innerHTML);

});