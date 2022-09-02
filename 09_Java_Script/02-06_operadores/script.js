//MÓDULO: JS
//Capítulo: 02-06 (OPERADORES)

/* ### OPERADORES ARITIMÉTICOS ###
+
-
*
/
%
** (exponenciação ES2016)    */

console.log("Operadores aritméticos");
console.log(`3 + 4 = ${3 + 4}`);
console.log(`3 - 4 = ${3 - 4}`);
console.log(`3 * 4 = ${3 * 4}`);
console.log(`19 / 3 = ${19 / 5}`);
console.log(`19 % 3 = ${19 % 5}`);
console.log(`3 ** 4 = ${3 ** 4}`);

/* ### OPERADORES COMPARATIVOS ###
< 
> 
<= 
>=
*/
console.log("Operadores comparativos");
console.log(`10 > 5 = ${10 > 5}`);
console.log(`10 < 5 = ${10 < 5}`);
console.log(`10 >= 5 = ${10 >= 5}`);
console.log(`10 <= 5 = ${10 <= 5}`);

/*




Converte para um tipo em comum, depois compara:
== 
!=

Compara levando em conta também o tipo:
=== 
!== 

object: compara referência
string, number, boolean: compara valor
*/
console.log("Operadores comparativos de igualdade");
console.log(`"" == false: ${"" == false}`);
console.log(`"" === false: ${"" === false}`);
console.log(`"17" == 17: ${"17" == 17}`);
console.log(`"17" === 17: ${"17" === 17}`);







console.log("Operadores comparativos de igualdade");
const x = "Maria";
const y = "Maria";
const a = new String("Maria");
const b = new String("Maria");
console.log(`const x = "Maria"`);
console.log(`const y = "Maria"`);
console.log(`const a = new String("Maria")`);
console.log(`const b = new String("Maria")`);

//AQUI ELE ESTÁ COMPARANDO DUAS VARIÁVEIS DO MESMO TIPO COM O MESMO OBJETO APENAS NOMES DIFERENTES.
//POR ESTE MOTIVO DÁ VERDADEIRO NO RESULTADO ("true")
console.log(`x === y: ${x === y}`);

//AQUI ELE ESTÁ COMPARANDO DOIS OBJETOS INSTANCIADOS DO MESMO TIPO, COM O MESMO CONTEÚDO PORÉM EM 
//COM REFERÊNCIAS DIFERENTES. APESAR DE SER IGUAIS ESTÃO ALOCADOS EM LOCAIS DIFERENTES, POR ISSO DÁ "FALSO"
//"false"
console.log(`a === b: ${a === b}`);
console.log(`typeof x: ${typeof x}`);
console.log(`typeof a: ${typeof a}`);

/*
OPERADORES LÓGICOS
&& (E)
|| (OU)
! (NÃO)
*/
console.log("Operadores lógicos");
console.log(`(10 > 5) && (10 > 20): ${(10 > 5) && (10 > 20)}`);
console.log(`(10 > 5) && (10 < 20): ${(10 > 5) && (10 < 20)}`);
console.log(`(10 > 5) || (10 > 20): ${(10 > 5) || (10 > 20)}`);
console.log(`(10 < 5) || (10 > 20): ${(10 > 5) && (10 > 20)}`);
console.log(`!(10 > 5): ${!(10 > 5)}`);