const titulo = document.querySelector("#titulo");
const btn = document.querySelector("#btnClick");

btn.addEventListener("click", () => {
  titulo.textContent = "¡Texto cambiado con un clic!";
});