// ###########################################
// ###### DESAFIO CALCULADORA JS #############
// ###########################################

// CAPÍTULO: JAVA SCRIPT
// MÓDULO 09
// ALUNO: GUTEMBERGUE SR JUNIOR.

//ARMAZENAMENTO DE ELEMENTOS:
const inputNumber1 = document.querySelector('#number1');
const inputNumber2 = document.querySelector('#number2');
const result = document.querySelector('#result-box');
const btnPlus = document.querySelector('#btn-plus');
const btnTimes = document.querySelector('#btn-times');
const btnClear = document.querySelector('#btn-clear');
const inputError = document.querySelector('.input-error');

//CONFIGURAÇÕES DOS EVENTOS:
btnPlus.addEventListener('click', handleBtnPlusClick);
btnTimes.addEventListener('click', handleBtnTimesClick);
btnClear.addEventListener('click', handleBtnClearClick);
inputError.classList.remove('input-error');

inputNumber1.addEventListener('change', (event) => {
	if (isNaN(Number(inputNumber1.value))) {
		inputNumber1.classList.add('input-error');
	} else {
		inputNumber1.classList.remove('input-error');
	}
});

inputNumber2.addEventListener('change', (event) => {
	if (isNaN(Number(inputNumber2.value))) {
		inputNumber2.classList.add('input-error');
	} else {
		inputNumber2.classList.remove('input-error');
	}
});

//FUNÇÕES:
function handleBtnPlusClick(event) {
	event.preventDefault();
	const plus = Number(inputNumber1.value) + Number(inputNumber2.value);
	result.innerHTML = plus;
	const resultPlus = result.innerHTML;

	if (isNaN(resultPlus)) {
		result.innerHTML = 0;
	}
}

function handleBtnTimesClick(event) {
	event.preventDefault();
	const times = Number(inputNumber1.value) * Number(inputNumber2.value);
	result.innerHTML = times;
	const resultTimes = result.innerHTML;
	if (isNaN(resultTimes)) {
		result.innerHTML = 0;
	}
}

function handleBtnClearClick(event) {
	inputNumber1.value = ' ';
	inputNumber2.value = ' ';
	result.innerHTML = 0;
	inputNumber1.classList.remove('input-error');
	inputNumber2.classList.remove('input-error');
}
