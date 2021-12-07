function showPass () {
  if (document.getElementById("palavra").getAttribute("type") == "password") {
    document.getElementById("palavra").setAttribute("type", "text");
    document.getElementById("mostrar").innerText = "O";
  } else {
    document.getElementById("palavra").setAttribute("type", "password");
    document.getElementById("mostrar").innerText = "M";
  }
}
function criarElemento (pai, atributes) {
  elemento = document.createElement(atributes[0]);
  for (let index = 1; index < atributes.length; index+2) {
    elemento.setAttribute(atributes[index],atributes[index+1]);
  }
  document.body.insertBefore(elemento, pai.nextSibling);
}