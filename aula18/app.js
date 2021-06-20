const pessoa1 = {
    nome: 'Juliana',
    sobrenome: 'Barbosa',
    idade: 18,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi....`);
    }
};

pessoa1.fala()