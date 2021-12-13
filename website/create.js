function criarComponente(index) {
  
  // Cria uma div ṕara agrupar o componente
  divcomp = ["div", "id", ("componente" + index), "class", "componente"];
  criarElemento("create", divcomp);
  for (let i = 1; i <= 2; i++) {
    //div para agrupar elementos de eletricista
    eletricista = ["div", "id", ("divEletricista" + index.toString() + i.toString())];
    criarElemento(("componente" + index), eletricista);
    // Elementos da div do label
    divlabel = ["div", "class", "label", "id", ("divlabel" + index.toString() + i.toString())];
    criarElemento(("divEletricista" + index.toString() + i.toString()), divlabel);
    // Elementos do label do input
    formlabel = ["label", "innerHTML", ("Eletricista " + i), "for", ("eletricista" + index.toString() + i.toString())];
    criarElemento(("divlabel" + index.toString() + i.toString()), formlabel);
    // Elementos do div input do formulário
    divinput = ["div", "class", "input", "id", ("divinput" + index.toString() + i.toString())];
    criarElemento(("divEletricista" + index.toString() + i.toString()), divinput);
    // Elementos do input do datalista
    forminput = ["input", "list", ("listaEletricista" + index.toString() + i.toString()), "id", ("inputEletricista" + index.toString() + i.toString())];
    criarElemento(("divinput" + index.toString() + i.toString()), forminput);
    // Elementos do datalist
    datalist = ["datalist", "id", ("listaEletricista" + index.toString() + i.toString())];
    criarElemento(("inputEletricista" + index.toString() + i.toString()), datalist);
    // Elemento do option do datalista
    option = ["option", "label", "Ruan Faustino Camello Da Silva", "value", "2258038"];
    criarElemento(("listaEletricista" + index.toString() + i.toString()), option)
    checkbox = ["input", "type", "checkbox", "value", true, "name", ("persistir" + index.toString() + i.toString())];
    criarElemento(("divEletricista" + index.toString() + i.toString()), checkbox);
    checklabel = ["label", "innerHTML", "Persistir mudança", "for", ("persistir" + index.toString() + i.toString())];
    criarElemento(("divEletricista" + index.toString() + i.toString()), checklabel);
  }
  
  
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
//inserirElementos();

criarComponente(2);