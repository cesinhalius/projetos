function Enviar(){
    let nome = document.getElementsByName("Name");
    let email = document.getElementsByName("Email");
    let senha = document.getElementsByName("Senha");
    
    if(nome.values !== "" && email.values !== "" && senha.values !== ""){
        console.log('oi');
    }
}