const calcular = document.getElementById('calcular'); 



function imc(){
    const nome = document.getElementById('nome'); 
    const altura = document.getElementById('altura'); 
    const peso = document.getElementById('peso'); 
    const resultado = document.getElementById('resultado'); 


    if(nome !== '' &&  altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso'
        }else if(valorIMC < 25){
            classificacao = 'com peso ideal. Parabens'
        }else if(valorIMC < 30){
            classificacao = 'levemente acima do peso'
        }else if(valorIMC < 35){
            classificacao = 'com obsidade grau I'
        }else if(valorIMC < 40){
            classificacao = 'com obsidade grau II'
        }else{
            classificacao = 'com obsidade grau III. Cuidado'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta ${classificacao}`
    }else{
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}





calcular.addEventListener('click', imc);