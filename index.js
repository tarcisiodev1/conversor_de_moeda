import ConversorMoeda from "./js/conversorMoeda.js";
const form = document.getElementById("form");
const inputReal = document.querySelector("#real");
const resultado = document.querySelector("#resultado");
// let dolar = 0.19;
console.log(form);

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let real = inputReal.value.replace(",", ".");
  real = parseFloat(real);
  const converterParaDolar = new ConversorMoeda("Dolar", 0.19);

  console.log(converterParaDolar);

  resultado.innerHTML = `${real} em ${
    converterParaDolar.nome
  }: ${converterParaDolar.converterMoeda(real)}`;
});
