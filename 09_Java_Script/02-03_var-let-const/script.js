const x = 10;

if (x > 0) {
	var a = 100;
	let b = 200;
	const c = 300;
	console.log('Imprimindo dentro do IF:');
	console.log(a);
	console.log(b);
	console.log(c);
}

console.log('Imprimindo fora do IF:');
console.log(a);
//console.log(b);
//console.log(c);

// O Tipo de variávl "VAR" não obedeçe o ESCOPO.
// Isto é considerado como "Vasamento de Escopo" - É INDESEJÁVEL
// Os tipos de variável "LET e CONST" obedecem o escopo. RECOMENDÁVEL.

console.log('Imprimindo resultado do FOR:');
for (let i = 0; i < 5; i++) {
 console.log(i)
}
