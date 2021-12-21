index = 1;

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
    inserirElementos(index, i);
    checkbox = ["input", "type", "checkbox", "value", true, "name", ("pEletricista" + index.toString() + i.toString())];
    criarElemento(("divEletricista" + index.toString() + i.toString()), checkbox);
    checklabel = ["label", "innerHTML", "Persistir mudança", "for", ("pEletricista" + index.toString() + i.toString())];
    criarElemento(("divEletricista" + index.toString() + i.toString()), checklabel);
  }
  divPhone = ["div", "class", "telefone", "id", ("divPhone" + index.toString())];
  criarElemento(("componente" + index), divPhone);
  labelPhone = ["label", "innerHTML", "Telefone", "for", ("telefone" + index.toString())];
  criarElemento(("divPhone" + index.toString()), labelPhone);
  telefone = ["input", "type", "tel", "pattern", "[0-9]{11}"];
  criarElemento(("divPhone" + index.toString()), telefone);
  checkPhone = ["input", "type", "checkbox", "value", true, "name", ("pTelefone" + index.toString())];
  criarElemento(("divPhone" + index.toString()), checkPhone);
  labelCheckPhone = ["label", "innerHTML", "Persistir mudanças", "for", ("pTelefone" + index.toString())];
  criarElemento(("divPhone" + index.toString()), labelCheckPhone);
  divCarro = ["div", "class", "viatura", "id", ("divCarro" + index.toString())];
  criarElemento(("componente" + index), divCarro);
  labelCarro = ["label", "innerHTML", "Viatura", "for", ("viatura" + index.toString())];
  criarElemento(("divCarro" + index.toString()), labelCarro);
  inputCarro = ["input", "list", ("listaViatura" + index.toString()), "id", ("inputViatura" + index.toString())];
  criarElemento(("divCarro" + index.toString()), inputCarro);
  datalist = ["datalist", "id", ("listaViatura" + index.toString())];
  criarElemento(("divCarro" + index.toString()), datalist);
  checkCarro = ["input", "type", "checkbox", "value", true, "name", ("pViatura" + index.toString())];
  criarElemento(("divCarro" + index.toString()), checkCarro);
  labelcheckCarro = ["label", "innerHTML", "Persistir mudanças", "for", ("pViatura" + index.toString())];
  criarElemento(("divCarro" + index.toString()), labelcheckCarro);
  console.log(index);
  return index + 1;
}

function criarElemento(pai, atributes) {
  daddy = document.getElementById(pai);
  elemento = document.createElement(atributes[0]);
  a = 1;
  if (atributes[1] == "innerHTML") {
    elemento.innerHTML = atributes[2];
    a += 2;
  }
  while (index < atributes.length) {
    elemento.setAttribute(atributes[a], atributes[a + 1]);
    a += 2;
  }
  daddy.insertBefore(elemento, pai.nextSibling);
}

function inserirElementos(index, i) {
  option = ["option", "label", "Ruan Faustino Camello Da Silva", "value", "2258038"];
  criarElemento(("listaEletricista" + index.toString() + i.toString()), option)
}
//inserirElementos();
function clickCriarComponente() {
  index = criarComponente(index);
}
