//Não podemos criar constantes com palavras reservadas
//Constantes precisam ter nomes significativos
//Não se deve começar o nome de constantes com números
//Nome de constantes não podem conter espaços ou traços
//Utilizar camelCase
//Case-sensitive
//Não podemos modificar o valor de uma constante
//NÃO UTILIZE VAR, UTILIZE CONST

const nome = 'Juliana'
console.log(nome);

const primeiroNumero = 5;
const segundoNumero= 10;
const conta = primeiroNumero * segundoNumero;
const contaDuplicada = conta * 2
const resultadoTriplicado = conta * 3
console.log(conta);
console.log(contaDuplicada);
console.log(resultadoTriplicado);

console.log (typeof primeiroNumero); //O operador typeof retorna uma string indicando o tipo de um operando.
console.log(primeiroNumero + segundoNumero) //Soma
console.log(primeiroNumero + nome ); //Concatenação


//Uma constante pode ser modificada mas seu valor inicial não muda
//Um let ao ser modificado seu valor sempre sera o da mais recente modificação ser sem possivel voltar ao seu valor inicial