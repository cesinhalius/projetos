function insert(num){
    let numero = document.getElementById('result');
    document.getElementById('result').innerHTML = numero + num;
}

function calcular(){
    let resultado = document.getElementById('result').innerHTML;
    if(resultado){
        document.getElementById('result').innerHTML = eval(resultado);
    }else{
        document.getElementById('result').innerHTML = "Tente Novamente";
    }
}