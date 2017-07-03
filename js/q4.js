   function gerarArray() {
  var valMin = document.getElementById("valMin").value;
  var valMax = document.getElementById("valMax").value;
  var quantidade = document.getElementById("quantidade").value;
  var array = [];

  if (valMin < valMax) {
    while (array.length < 20) {
      var randomArray = Math.floor(Math.random() * (valMax - valMin + 1) + valMin);
      if (randomArray >= valMin && randomArray <= valMax && array.indexOf(randomArray) == -1) {
        array.push(randomArray);
      }
    }
    var ArrayOrdenado = array.sort(function(a, b) {return a - b});
    document.getElementById("resultadoq4").innerHTML = ArrayOrdenado;
  } else {
    document.getElementById("resultadoq4").innerHTML = "Operação não é possível, o valor mínimo deve ser menor que o valor máximo!";
  }
}

function criarCalculo(inputType, labelText, inputName) {

  var container = document.getElementById("q4");

  var newLabel = document.createElement("label");
  newLabel.setAttribute("for", inputName);
  var labelText = document.createTextNode(labelText)
  newLabel.appendChild(labelText);

  var newInput = document.createElement("input");
  newInput.setAttribute("name", inputName);
  newInput.setAttribute("id", inputName)
  newInput.setAttribute("type", inputType);
  newLabel.appendChild(newInput);
  container.appendChild(newLabel);
}

function criar() {
  var container = document.getElementById("q4");

  criarCalculo("number", "Valor mínimo: ", "valMin");
  criarCalculo("number", "Valor máximo: ", "valMax");
  criarCalculo("number", "Quantidade de números: ", "quantidade");

  var btn = document.createElement("button");
  var btnTxt = document.createTextNode("Calcular");
  btn.appendChild(btnTxt);
  btn.setAttribute("id", "btnq4")
  container.appendChild(btn);

  var resultado = document.createElement("p");
  resultado.setAttribute("id", "resultadoq4");
  container.appendChild(resultado);

  document.getElementById("btnq4").addEventListener("click", gerarArray);
}

criar();
