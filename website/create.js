function criarComponente(index) {
  // Elementos da div do label
  divlabel = ["div", "class", "label", "id", ("divlabel" + index)];
  criarElemento("create", divlabel);
  // Elementos do label do input
  formlabel = ["label", "innerHTML", ("Eletricista " + index), "for", ("eletricista" + index)];
  criarElemento(("divlabel" + index), formlabel);
  // Elementos do div input do formulário
  divinput = ["div", "class", "input", "id", ("divinput" + index)];
  criarElemento("create", divinput);
  // Elementos do input do datalista
  forminput = ["input", "list", ("listaEletricista" + index), "id", ("inputEletricista" + index)];
  criarElemento(("divinput" + index), forminput);
  // Elementos do datalist
  datalist = ["datalist", "id", ("listaEletricista" + index)];
  criarElemento(("inputEletricista" + index), datalist);
  // Elemento do option do datalista
  option = ["option", "innerHTML", "nome do eletricista", "value", "matricula"];
  criarElemento(("listaEletricista" + index), option)
}

function criarElemento(pai, atributes) {
  daddy = document.getElementById(pai);
  elemento = document.createElement(atributes[0]);
  index = 1;
  if (atributes[1] == "innerHTML") {
    elemento.innerHTML = atributes[2];
    index += 2;
  }
  while (index < atributes.length) {
    elemento.setAttribute(atributes[index], atributes[index + 1]);
    index += 2;
  }
  daddy.insertBefore(elemento, pai.nextSibling);
}

function inserirElementos() {
  eletricistas = ["option", "innerHTML", "Manserv", "value", "cabecalho"];
  criarElemento("eletricista", eletricistas);
}
inserirElementos();
criarComponente(2);