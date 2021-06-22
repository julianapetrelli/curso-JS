/*
Tipos de dados:

- Primitivos (imutáveis) - String, number, boolean, undefined, null (bigint, symbol) - Valores copiados
- Referência (mutável) - array, object, function - Passado por refêrencia, apontar para o mesmo lugar

*/

const pessoa = {
    nome: 'Juliana',
    sobrenome: 'Barbosa',
    idade: 18
}

const pessoa2 = {...pessoa} //Faço uma cópia do objeto pessoa, sem que os 2 estejam ligados no mesmo lugar de armazenamento

console.log(pessoa2);



