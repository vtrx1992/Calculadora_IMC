var calcular = document.getElementById('btn')

function imc (){
    var resultado = document.getElementById('resultado');
    var altura1 = document.getElementById('altura').value;
    var peso1 = document.getElementById('peso').value;

    if(altura1 !== '' && peso1 !== '') {
        const valorIMC = (peso1 / (altura1 * altura1)).toFixed(2);

        let classificacao = '';

        if (valorIMC < 16.9){
            classificacao = 'muito abaixo do peso'
        } else if (valorIMC < 18.4){
            classificacao = 'abaixo do peso'
        } else if (valorIMC < 24.9){
            classificacao = 'peso normal'
        } else if(valorIMC < 29.9){
            classificacao = 'acima do peso'
        } else if(valorIMC < 34.9){
            classificacao = 'obesidade grau 1'
        } else if(valorIMC < 40){
            classificacao = 'obesidade grau 2'
        } else if(valorIMC > 40){
            classificacao = 'obesidade grau 3'
        }

        resultado.textContent = `IMC = ${valorIMC}, você está: ${classificacao}`;
    } else {
        resultado.textContent = 'Preencha todos os campos!!!'
    }
}

calcular.addEventListener('click', imc);