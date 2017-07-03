var container = document.getElementById("q3");

var titulo = document.createElement("h2");
titulo.innerHTML = "Relatório de Alunos";
container.appendChild(titulo);

var btnRelatorio = document.createElement("button");
btnRelatorio.innerText = "Exibir relatório";
btnRelatorio.onclick = exibirNota;
container.appendChild(btnRelatorio);

function exibirNota() {
  var nota = Symbol();

  class Aluno {
    constructor(nome, nr, nots) {
      this.nome = nome;
      this.nr = nr;
      this[nota] = nots;
    }

    getNota() {
      return this[nota];
    }
  }

  function gerarNota() {
    var valMin = 0;
    var valMax = 100;
    var nota = Math.floor(Math.random() * (valMax - valMin + 1) + valMin);
    if (nota >= valMin && nota <= valMax) {
      return nota
    } else {
      return "Algo deu Errado"
    }
  }

  var Alunos = [];
  for (var i = 0; i < 20; i++) {
    Alunos.push(new Aluno("Aluno" + i, gerarNota()+1, gerarNota()));
  }

  criarTabela();

  function criarTabela() {
    var tabelaRelatorio = document.createElement('table');
    tabelaRelatorio.setAttribute('border', '1');
    var legenda = document.createElement('caption');
    legenda.innerHTML = '<h2>Notas</h2>';
    tabelaRelatorio.appendChild(legenda);
    var corpoTabela = document.createElement('tbody');

    var tituloLinha = document.createElement('tr');
    var coluna1 = document.createElement('td');
    coluna1.innerHTML = '<h3> Nome </h3>';
    var coluna2 = document.createElement('td');
    coluna2.innerHTML = '<h3> NR </h3>';
    var coluna3 = document.createElement('td');
    coluna3.innerHTML = '<h3> Nota </h3>';

    tituloLinha.appendChild(coluna1);
    tituloLinha.appendChild(coluna2);
    tituloLinha.appendChild(coluna3);
    corpoTabela.appendChild(tituloLinha);

    var alunosAprovados = 0;
    var alunosReprovados = 0;

    for (var i = 0; i < Alunos.length; i++) {
      var linha = document.createElement('tr');

      var calc1 = document.createElement('td');
      calc1.appendChild(document.createTextNode(Alunos[i].nome));

      var calc2 = document.createElement('td');
      calc2.appendChild(document.createTextNode(Alunos[i].nr));

      var calc3 = document.createElement('td');
      if (Alunos[i].getNota() > 70) {
        calc3.appendChild(document.createTextNode(Alunos[i].getNota() + " - APROVADO"));
        alunosAprovados++;
      } else {
        calc3.appendChild(document.createTextNode(Alunos[i].getNota() + " - REPROVADO"));
        alunosReprovados++;
      }

      linha.appendChild(calc1);
      linha.appendChild(calc2);
      linha.appendChild(calc3);

      corpoTabela.appendChild(linha);
    }

    var linhaFooter = document.createElement('tr');

    var Footer = document.createElement('td');
    Footer.colSpan = "3";
    Footer.innerHTML = (alunosAprovados * 100) / 20 + " % de alunos aprovados(" + alunosAprovados + "):   <br>" + (alunosReprovados * 100) / 20 + "% de alunos reprovados (" + alunosReprovados + ")";


    linhaFooter.appendChild(Footer);
    corpoTabela.appendChild(linhaFooter);
    tabelaRelatorio.appendChild(corpoTabela);
    container.appendChild(tabelaRelatorio);
  }
}
