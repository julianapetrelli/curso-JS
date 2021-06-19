/*

------------------------------------------------

Operadores aritméticos ( + - * / )

+ pode ser adição ou concatenação
** Potenciação (Um número elevado a outro)
% Resto da divisão

Ordem de precedendencia

()
**
*
/
%
+
-

Operador de incremento e decremento

variavel++= O último valor é mantido
++variavel = O último valor não é mantido

------------------------------------------------

*/

//Concatenação

const num1 = '5';
const num2 = '10';
console.log(num1 + num2);

//Adição

const num1 = 5;
const num2 = 10;
console.log(num1 + num2);

//Operador de incremento

let contador = 1;
contador++; //2
contador++; //3
contador++; //4
console.log(contador);

//Operador de decremento

let contador = 10;
console.log(--contador);
console.log(contador);

//Incremento de mais de um valor

const passo = 2;
let contator = 0;

contator = contator + passo;
console.log(contador);

//ou

contador += passo
console.log(contador);


//Operadores de atribuição

let contador = 2;
contador **= 10;
console.log(contador);


//NaN NaN - Not a number

const num1= 10;
const num2 = 'Juliana'
console.log(num1 * num2);

// parseInt(inteiro), parseFloat(decimal)

const num1 = 10;
const num2 = number (15)
console.log(num1 + num2)
console.log(typeof num2)



