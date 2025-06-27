/*2. Crie um array com os números de 1 a 10 e exiba apenas os pares.*/


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosPares = numeros.filter(num => num % 2 === 0);

console.log(numerosPares);
