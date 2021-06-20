let num1 = 1500.32455; //number
let num2 = 2.5; //nuber

num1 += num2; //num1 = num1 + num2

console.log(num1.toString() + num2); //Retornar uma string baseada em um número

console.log(num1.toString(2)); //Retorna a representação binária

console.log(num1.toFixed(2)); //Determina as casas decimais em numeros reais

console.log(Number.isInteger(num1)); //Vai retornar verdadeiro ou falso referente ao número ser inteiro ou não

let temp = num1 * '5';
console.log(Number.isNaN(temp)); //Retorna verdadeiro sempre que a conta for inválida

