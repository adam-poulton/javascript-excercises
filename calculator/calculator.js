function add (a, b) {
	return a + b
}

function subtract (a, b) {
	return a - b
}

function sum (array) {
	let sum = 0;
	array.forEach(num=>sum+=num);
	return sum;
}

function multiply (array) {
	let sum = 1;
	array.forEach(num=>sum*=num);
	return sum;
}

function power(a, b) {
	let result = 1;
	for (let i = 0; i < b; i++){
		result *= a
	}
	return result;
}

function factorial(a) {
	let result = 1;
	for (let i = 0; i < a; i++){
		result *= i + 1;
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}