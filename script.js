window.addEventListener("keydown", keyDownListener);
window.addEventListener("keyup", keyUpListener);

function keyDownListener(event) {
  switch (event.key) {
    case "q":
      document.querySelector("#q").classList.add("show");
      break;
    case "w":
      document.querySelector("#w").classList.add("show");
      break;
    case "e":
      document.querySelector("#e").classList.add("show");
      break;
    case "r":
      document.querySelector("#r").classList.add("show");
      break;
    case "t":
      document.querySelector("#t").classList.add("show");
      break;
    case "y":
      document.querySelector("#y").classList.add("show");
      break;
    case "u":
      document.querySelector("#u").classList.add("show");
      break;
    case "i":
      document.querySelector("#i").classList.add("show");
      break;
    case "o":
      document.querySelector("#o").classList.add("show");
      break;
    case "p":
      document.querySelector("#p").classList.add("show");
      break;
    case "a":
      document.querySelector("#a").classList.add("show");
      break;
    case "s":
      document.querySelector("#s").classList.add("show");
      break;
    case "d":
      document.querySelector("#d").classList.add("show");
      break;
    case "f":
      document.querySelector("#f").classList.add("show");
      break;
    case "g":
      document.querySelector("#g").classList.add("show");
      break;
    case "h":
      document.querySelector("#h").classList.add("show");
      break;
    case "j":
      document.querySelector("#j").classList.add("show");
      break;
    case "k":
      document.querySelector("#k").classList.add("show");
      break;
    case "l":
      document.querySelector("#l").classList.add("show");
      break;
    case "z":
      document.querySelector("#z").classList.add("show");
      break;
    case "x":
      document.querySelector("#x").classList.add("show");
      break;
    case "c":
      document.querySelector("#c").classList.add("show");
      break;
    case "v":
      document.querySelector("#v").classList.add("show");
      break;
    case "b":
      document.querySelector("#b").classList.add("show");
      break;
    case "n":
      document.querySelector("#n").classList.add("show");
      break;
    case "m":
      document.querySelector("#m").classList.add("show");
    default:
      return; // Quit when this doesn't handle the key event.
  }
}

// döljer motsvarande bilder.
function keyUpListener(event) {
  if (document.querySelector("svg.show")) {
    document.querySelector("svg.show").classList.remove("show");
  }
}
