var container = document.getElementById("q6");

var numQuestao = document.createElement("h2");


var login = document.createElement("input");

login.placeholder = "Login";
container.appendChild(login);

var senha = document.createElement("input");

senha.placeholder = "Senha";
senha.setAttribute("type", "number");
container.appendChild(senha);
container.appendChild(document.createElement("br"));

var btnLogar = document.createElement("button");

btnLogar.innerText = "LOGAR";
btnLogar.onclick = logarUsuario;
container.appendChild(btnLogar);

var btnCadastrar = document.createElement("button");

btnCadastrar.innerText = "CADASTRAR";
btnCadastrar.onclick = cadastrarUsuario;
container.appendChild(btnCadastrar);


function logarUsuario() {
  if (localStorage.hasOwnProperty(login.value) && localStorage.getItem(login.value) === senha.value)
    window.location.replace("sucesso.html");
  else {
    alert('SENHA ERRADA OU USUÁRIO NÃO EXISTE');
    login.value = "";
    senha.value = "";
  }
}

function cadastrarUsuario() {
  if (login.value != "") {
    localStorage.setItem(login.value, senha.value);
    container.appendChild(document.createElement("br"));

    var msg = document.createElement("h4");
    msg.innerHTML = "CADASTRADO";
    container.appendChild(msg);

    login.value = "";
    senha.value = "";
  }
}
