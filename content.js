window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    // Altere o valor aqui para determinar a posição em que a cor deve ser alterada
    nav.style.backgroundColor = "rgba(17, 17, 17, 0.9)";
  } else {
    nav.style.backgroundColor = "transparent"; // Define a cor de fundo original da nav quando a posição de rolagem for menor que 100
  }
});
