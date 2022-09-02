 export function sum(num1, num2) {
	return num1 + num2;
}

function exp(base, expoent) {
	return base ** expoent;
}

export function round(value, precision) {
	var multiplier = exp(10, precision || 0);
	return Math.round(value * multiplier) / multiplier;
}

/*

EXISTE UMA SEGUNDA FORMA DE INFORMAR QUAIS SÃO OS FUNÇÕES 
QUE SERÃO EXPORTADAS.

OBSERVE QUE A FUNÇÃO EXP ESTÁ SEM O EXPORT (Isto significa que ela está ENCAPSULADA)

function sum(num1, num2) {
	return num1 + num2;
}

function exp(base, expoent) {
	return base ** expoent;
}

function round(value, precision) {
	var multiplier = exp(10, precision || 0);
	return Math.round(value * multiplier) / multiplier;
}

**** NO EXEMPLO ACIMA TODAS AS FUNÇÕES ESTÃO DECLARADAS SEM O EXPORT 
(Isto significa que todas estão encapsuladas)

SUPONHA QUE EU QUEIRA EXPORTAR APENAS AS FUNÇÕES (SUM E ROUND)

Basta criar um objeto "export" com o nome das funções que devem ser 
exportadas. Assim:

export {sum, round};

*/