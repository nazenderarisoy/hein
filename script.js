// Constanten en variabelen
const fotoElement = document.getElementById("foto");
const audioButton = document.getElementById("audio");
const vissticksButton = document.getElementById("visticks");
const bokaaienButton = document.getElementById("bokaaien");
const gitaarButton = document.getElementById("gitaar");

// Functies
function toonVisstickAfbeelding() {
  let kans = Math.random();

  if (kans < 0.5) {
    fotoElement.src = "images/heinbuikvol.png";
  } else {
    fotoElement.src = "images/heinvisstick.png";
  }
}
function toonBokAfbeelding() {
  let kans = Math.random();

  if (kans < 0.5) {
    fotoElement.src = "images/heinenhanslief.png";
  } else {
    fotoElement.src = "images/heinenhansboos.png";
  }
}
function toonGitaarAfbeelding() {
  let kans = Math.random();

  if (kans < 0.5) {
    fotoElement.src = "images/heingitaarkapot.png";
  } else {
    fotoElement.src = "images/heingitaarleuk.png";
  }
}
function speelAudioAf() {
  let audio = new Audio("audio/heinlach.mp3");
  audio.play();
}

// Eventlisteners
vissticksButton.addEventListener("click", toonVisstickAfbeelding);
bokaaienButton.addEventListener("click", toonBokAfbeelding);
audioButton.addEventListener("click", speelAudioAf);
gitaarButton.addEventListener("click", toonGitaarAfbeelding);