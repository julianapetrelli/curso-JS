//Todos os primitivos são imutáveis (não podem ter o seu valor modificado).

const nome = 'Juliana';           //String
const nome1 = "Juliana";          //String
const nome2 = `Juliana`;          //String

const num1 = 10;                  //Number
const num2 =  10.52;              //Number
let nomeAluno;                    //Undefined = não aponta para lugar nenhum na memória
let sobrenomeAluno = null;        // Nulo =  não aponta para lugar nenhum na memória
const boolean                     // True ou false (lógico)

const a = [1, 2];
const b = a;

console.log(a,b);

b.push(3);
console.log(a,b);