function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa ('Juliana','Tangerino', 18);
const pessoa2 = criaPessoa ('Nicollas', 'Feitosa', 19);

console.log(pessoa1,pessoa2)



