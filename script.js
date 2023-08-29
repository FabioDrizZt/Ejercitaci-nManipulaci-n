/* const tema = confirm("Desea aplicar el tema oscuro?");

if (tema) {
  document.body.classList.add("dark");
} */

function darkMode() {
  /*   if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.querySelector("button").innerText = "Activar Modo Oscuro";
  } else {
    document.body.classList.add("dark");
    document.querySelector("button").innerText = "Desactivar Modo Oscuro";
  } */
  document.body.classList.toggle("dark");
}
