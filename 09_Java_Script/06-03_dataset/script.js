//Java Script - DATASET
//CAPÍTULO:06-03 (DATASET)

// SELEÇÃO DE ELEMENTOS VIA "DATASET"

//O Que é o Dataset?
//São atributos adicionais que se pode por nos elementos, que não irão 
//influenciar em nada no comportamento na página mas que pode facilitar 
//a comunicação com o Java Script.

//Como atribuir um atributo dataset a um elemento html?
//Da mesma forma que de atribui um classe ou um id porém apenas assim:
//a palavra "data com um hifem" assim: "data-" + o "nome que voce quiser"
//Por exemplo: Observe a div abaixo.

//<div class="card">

//Suponha que esta div represente um produto.
//Então podemos nomea-la como "data-price"

//<div class="card" data-price="300.50">

//Também podemos adicionar um outro dataset como "data-product-id"

//DIV QUE REPRESENTA O CARD 1 NO HTML
//<div class="card" data-price="300.50" data-product-id="32">

//DIV QUE REPRESENTA O CARD 2 NO HTML
//<div class="card"  data-product-id="45">


const card1 = document.querySelector('.card');
console.log(card1);

//TAMBÉM É POSSÍVEL SELECIONAR ELEMENTOS PELA CLASSE

//BASTA SUBSTITUIRMOS O ".card1" por ('[class=card]')
//Desta forma ele irá pegar os elementos que tem a classe "card" definida.

const card2 = document.querySelectorAll('[class=card');
console.log("Teste card1: ",card2);

[...card2].map(item =>{
    console.log("Teste card2: ", item);
});

const card3 = document.querySelector('[data-product-id="32"]');
console.log("Teste card3: ",card3);

