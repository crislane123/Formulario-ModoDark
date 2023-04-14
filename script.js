
function validar(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var cpf = document.getElementById('cpf').value;
    

    if(nome == ""){
        alert("Nome não infomado");
    }else
    if(email == ""){
        alert("E-mail não infomado");
    }else 
    if(telefone == ""){
        alert("Telefone não infomado");
    }else
    if(cpf == ""){
        alert("CPF não infomado");
    }
}

function darkMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
  }
  function lightMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
  }
