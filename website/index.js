function criarElemento(pai, atributes) {
    daddy = document.getElementById(pai);
    elemento = document.createElement(atributes[0]);
    index = 1;
    if (atributes[1] == "innerHTML") {
        elemento.innerHTML = atributes[2];
        index += 2
    }
    while (index < atributes.length) {
        elemento.setAttribute(atributes[index], atributes[index + 1]);
        index += 2;
    }
    daddy.insertBefore(elemento, pai.nextSibling);
}

function cabeca() {
    cabecalho = ["h1", "innerHTML", "Manserv", "id", "cabecalho", "class", "filo"];
    criarElemento("header", cabecalho);
}
cabeca();