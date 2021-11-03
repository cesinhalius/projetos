

function Enviar(){
    let email = document.getElementById('email').value;
   let nome = document.getElementById('name').value;
    if(nome !== "" ){
        alert('obrigado por cadeastrar SR.' + nome + email);
    }else{
        console.log('oi')
    }
}
