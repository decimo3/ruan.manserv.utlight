function criarCabecalho(pai, atributes) {
  daddy = document.getElementById(pai);
  elemento = document.createElement(atributes[0]);
  indice = 1;
  if (atributes[1] == "innerHTML") {
    elemento.innerHTML = atributes[2];
    indice += 2
  }
  while (index < atributes.length) {
    elemento.setAttribute(atributes[index], atributes[index + 1]);
    indice += 2;
  }
  daddy.insertBefore(elemento, pai.nextSibling);
}

function inserirCabecalho() {
  cabecalho = ["h1", "innerHTML", "Manserv", "id", "cabecalho", "class", "filo"];
  criarElemento("header", cabecalho);
}
inserirCabecalho();