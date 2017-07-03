function calculoMaxMin(val_min, val_max) {
  var val_min = document.getElementById("val_min").value;
  var val_max = document.getElementById("val_max").value;
  var texto;
  var p = document.getElementById("resultadoq1");
  if (val_min > val_max) {
    texto = "O número " + val_min + " é maior que o " + val_max +  ". Impossível calcular pois o  valor mínimo é maior que valor máximo!"
    p.innerHTML = texto;
  } else {
    var r = 0;
    var temp = [];

    for (var i = val_min; i < val_max; i++) {
      if (i % 2 == 0 && i % 3 == 0) {
        if (i != val_min && i != val_max) {
          temp.push(i);
          r++
        }
      }
    }
    texto = "Existem " + r + " números entre " + val_min + " e " + val_max;
    p.innerHTML = texto;
  }
}

function addEventToButton() {
  document.getElementById("botao").addEventListener("click", calculoMaxMin);
}

function criarFormula(min, max) {
  var inputField1 = document.createElement("input");
  var inputField2 = document.createElement("input");
  var button = document.createElement("button");
  var textButton = document.createTextNode("Ver Resultado");
  var result = document.createElement("p");

  button.setAttribute("id", "botao");
  button.setAttribute("id", "botao");
  result.setAttribute("id", "resultadoq1")

  inputField1.setAttribute("id", "val_min");
  inputField1.type = "number";

  inputField2.setAttribute("id", "val_max");
  inputField2.type = "number";

  var container = document.getElementById("q1");

  button.appendChild(textButton);
  container.appendChild(inputField1);
  container.appendChild(inputField2);

  container.appendChild(button);
  container.appendChild(result);
  addEventToButton();
}

criarFormula();
