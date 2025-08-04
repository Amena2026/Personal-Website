const text = "Alex Mena";
let i = 0;
const speed = 100;

function type() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}

document.addEventListener("DOMContentLoaded", type);
