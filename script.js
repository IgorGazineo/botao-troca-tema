const body = document.querySelector("body");
const secretMSG = document.querySelector(".secret-msg");
const btn = document.querySelector(".button");
const circle = document.querySelector(".circle");
const h1SPAN = document.querySelector("h1 span");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  circle.classList.toggle("active");
  secretMSG.classList.toggle("active");
  body.classList.toggle("light");
  h1SPAN.classList.toggle("active");

  if (h1SPAN.classList.value === "") {
    h1SPAN.innerText = "Escuro";
  } else {
    h1SPAN.innerText = "Claro";
  }
});
