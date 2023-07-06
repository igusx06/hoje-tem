java.script













const naoButton = document.getElementById("naoButton");

naoButton.addEventListener("mouseover", function() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const randomX = Math.floor(Math.random() * (screenWidth - 100));
  const randomY = Math.floor(Math.random() * (screenHeight - 100));

  naoButton.style.position = "absolute";
  naoButton.style.left = randomX + "px";
  naoButton.style.top = randomY + "px";
});