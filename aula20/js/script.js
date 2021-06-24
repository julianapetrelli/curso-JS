function virgulaAltura() {
    let virgula = document.getElementById('altura')
    if (virgula.value.length == 2) {
        virgula.value += ","
    }
}

function virgulaPeso() {
    let virgula = document.getElementById('peso')
    if (virgula.value.length == 2) {
        virgula.value += ","
    }
}

function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const sexoFeminino = form.querySelector('.feminino');
        const sexoMasculino = form.querySelector('.masculino');
        const idade = form.querySelector('.idade');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        let sexo

        if (sexoFeminino.checked) {
            sexo = 'Feminino'
        } else {
            sexo = 'Masculino'
        }

        const pessoa = {
            sexo: sexo,
            idade: idade.value,
            peso: peso.value,
            altura: altura.value
        }

        const valorIdade = (parseInt(idade.value));
        const valorPeso = (parseFloat(peso.value));
        const valorAltura = (parseFloat(altura.value));
           
        //Calcula

        const imcFeminino = (((valorAltura * valorAltura) / 60) / valorPeso);

        if (imcFeminino <= 19.1) {
            console.log('Você está a baixo do peso recomendado')
        } else if (imcFeminino <= 25.8) {
            console.log('O seu peso é ideal')
        } else if (imcFeminino <= 27.3) {
            console.log('Você está acima do peso ideal')
        } else {
            console.log('Você está obeso')
        }

        console.log(imcFeminino);

        //Exibe resultado

        console.log(pessoa);
    }



    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();