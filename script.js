const fotoElement = document.getElementById("foto");
const gitaarButton = document.getElementById("gitaar");
const vissticksButton = document.getElementById("visticks");
const bokaaienButton = document.getElementById("bokaaien");
const button = document.getElementById("myButton");
const video = document.getElementById("myVideo");
const tekstElement = document.getElementById("tekst");

vissticksButton.addEventListener("click", () => {
  fotoElement.src = Math.random() < 0.5 ? "images/heinbuikvol.png" : "images/heinvisstick.png";

});

gitaarButton.addEventListener("click", () => {
  const videoElement = document.createElement("video");
  videoElement.src = "images/heinbasgitaar.mp4";
  fotoElement.parentNode.replaceChild(videoElement, fotoElement);
  videoElement.play();
});
/* bron code voor gitaar button: chatgpt*/

bokaaienButton.addEventListener("click", () => {
  fotoElement.src = Math.random() < 0.5 ? "images/heinenhanslief.png" : "images/heinenhansboos.png"; "images/heinenhans.png";
  });
  
function playAudio() {
    document.getElementById("myAudio").play();
  }