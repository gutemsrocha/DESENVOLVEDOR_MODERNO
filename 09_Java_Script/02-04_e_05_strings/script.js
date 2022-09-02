//MÓDULO: JS - STRINGS
//Capítulo: 02- (04 e 05) - STRINGS

console.log("Um string literal pode ficar entre aspas duplas");
console.log('Um string literal pode ficar entre aspas simples');
console.log(`Um string literal pode ficar entre crases`);

//`ENTRE CRASE CAMA-SE INTERPOLAÇÃO`

console.log("Concatenação e interpolação");
const num = 14.5;
console.log("O valor do produto é " + num);
console.log('O valor do produto é ' + num);
console.log(`O valor do produto é ${num}`);

console.log("Conversão entre number e string");
//PARA CONVERTER UM TIPO "number" PARA "string" - FUNÇÃO ".toString()"
const str1 = num.toString();
console.log(`Tipo de ${str1}: ${typeof str1}`);

//${ inserir aqui uma expressão: pode ser uma variável por exemplo}
//No exemplo abaixo dentro da ${} podemos ver dois valores: Uma variável "str2" e uma expressão
// "typeof"

// ".toFixed(2) -> Para converter o num em string com duas casas decimais."
const str2 = num.toFixed(2);
console.log(`Tipo de ${str2}: ${typeof str2}`);

// Para converter uma  String em Number:
const num1 = Number("14.5");
console.log(`Tipo de ${num1}: ${typeof num1}`);

//".parseInt() -> Também utilizado para converter uma String em Number:"
//Observação: o ",10" (Segundo argumento dentro da Função parseInt), INDICA A BASE DA CONVERSÃO 
//DESTA VARIÁVEL... O 10 - Signiica: Base 10 ou DECIMAL
// NESTE EXEMPLO O RETORNO SERÁ O PRÓRIO: 21
const num2 = parseInt("21", 10);
console.log(`Tipo de ${num2}: ${typeof num2}`);

//NESTE CASO O ",16" - Signiica: Base 16 ou HEXADECIMAL
//NESTE EXEMPLO O RETORNO SERÁ: 33 que é o 21 na base Hexadecimal
const num3 = parseInt("21", 16);
console.log(`Tipo de ${num3}: ${typeof num3}`);

//PARA CONVERTER UM NÚMERO FRACIONÁRIO (Com ponto flutuante em STRING)
//O "parseFloat" também utiliza o segundo argumento para a indicação da Base: DECIMAL, HEXADECIMAL etc.
const num4 = parseFloat("21.34", 10);
console.log(`Tipo de ${num4}: ${typeof num4}`);

console.log("Funções de string");

const str = "Maria Silva  ";
console.log(`const str = "Maria Silva  "`);
console.log(`toLowerCase: ${str.toLowerCase()}`);
console.log(`toUpperCase: ${str.toUpperCase()}`);
console.log(`charAt: ${str.charAt(3)}`); //Ele também aceita "${str[3]}"

//"REPLACE" - Neste exemplo irá substituir o "i" pelo "$"
// OBSERVAÇÃO: Desta forma o Replace irá substituir apenas a primeira ocorrência;
console.log(`replace (primeiro): ${str.replace("i", "$", )}`);
// DESTA FORMA, UTILIZANDO O "/i/g" O REPLACE IRÁ SUBSTITUIR TODAS AS OCORRÊNCIAS DO "i" POR "$".
console.log(`replace (todos): ${str.replace(/i/g, "$", )}`);

//Propriedade "LENGTH", UTILIZADO PARA FAZER A CONTAGEM DOS CARACTÉRIES DA STRING
//OBSERVAÇÃO: Os espaços também são incluídos na contagem.
console.log(`length: ${str.length}`);

//"indexOf" : Indica a PRIMEIRA ocorrência do que estiver indicado no argumento no exemplo a letra "i"
console.log(`indexOf: ${str.indexOf("i")}`);

//"lastIndexOf" : Indica a ÚLTIMA ocorrência do que estiver indicado no argumento no exemplo a letra "i"
console.log(`lastIndexOf: ${str.lastIndexOf("i")}`);

// UTILIZADO PARA RECORTAR UM PEDAÇO DA STRING
//Esta função possui dois argumentos (arg1, arg2)
//O "arg1" É a posição inicial
//O "arg2" OPCIONALMENTE É A POSIÇÃO FINAL
//Porque tem as posições: inicial e final?
//Por que se utulizar apenas a posição inicial, a String será cortada desta pocição em diante.
//Utilizando a posição final, COMO NO EXEMPLO "8", esta função se limitaria em iniciar o corte
// na posição 3 e finalizar na posição 8. Dispensando todo o excesso anterior e posterior ao (3 e ao 8)
//Observação, no caso do 8 ele irá exibir até o caracter da posição 7... Da oitava em diante será 
//suprimido.
console.log(`subtring: ${str.substring(3, 8)}`);

console.log(`Exemplo Prático de Utilização da Função Substring`);
const data = "14/10/2021";
const mes = data.substring(3, 5);
console.log(mes)

// OUTRO EXEMPLO: Suponha que vc tenha um valor de um preço no formato internacional.
//Por exemplo: "200.99". 
//Suponha que eu queira utiliza-lo com a vírgula e não com o ponto.
//Neste caso podemos utilizar o REPLACE.
//Veja:

//Observe que aqui o valor 200.99 está em forma de número "number"
const valor = 200.99

//Agora iremos converter este número para String com o ".toString()"
//Em seguida iremos substituir o "." pela "," com o ".replace(".", ".")
const novoValor = valor.toString().replace(".", ",");
console.log(novoValor);






//OUTRO EXEMPLO: Utilizar o ".toLowerCase()" no e-mail de alguém.
//Suponha que alguém tenha cadastrado o e-mail em um formulário com letras maiúsculas.
//Certamente, você não vai querer armazena-lo assim. 
//Então, para este fim será necessário utilizar a função ".toLowerCase" para converter o string 
//do e-mail da pessoa em um string com todas as letras minúsculas.

//TRIM - A função ".trim()", tem como objetivo APAGAR OS ESPAÇOS EM BRANCO DA STRING. NO COMEÇO E NO FIM.
console.log(`trim: ${str.trim()}`);