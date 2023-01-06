function goStepTwo() {
  textOne.style.display = "none";
  textTwo.style.display = "block";
  topLeftOne.style.display = "none";
  topLeftTwo.style.display = "flex";
}
function goStepThree() {
  textTwo.style.display = "none";
  textThree.style.display = "block";
  topLeftTwo.style.display = "none";
  topLeftThree.style.display = "flex";
}
function backStepOne() {
  textOne.style.display = "block";
  textTwo.style.display = "none";
  topLeftOne.style.display = "flex";
  topLeftTwo.style.display = "none";
}
function backStepTwo() {
  textTwo.style.display = "block";
  textThree.style.display = "none";
  topLeftTwo.style.display = "flex";
  topLeftThree.style.display = "none";
}

/*OUVRIR L'HAMBURGER -------------------------------------------------------------------------------*/
const hamburgerToggler = document.querySelector(".hamburger");

const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = e => {
  hamburgerToggler.classList.toggle("open");

  navLinksContainer.classList.toggle("open");
};

hamburgerToggler.addEventListener("click", toggleNav);

new ResizeObserver(entries => {
  if (entries[0].contentRect.width <= 1000) {
    navLinksContainer.style.transition = "transform 0.3s ease-out";
  } else {
    navLinksContainer.style.transition = "none";
  }
}).observe(document.body);

/*CACHER ROOM AVEC HAMBURGER ET CHANGER COULEUR SPAN--------------------------------------------------*/

function hamburgerOpen() {
  // récupère l'élément p avec l'id "text"
  var textElement = document.getElementById("room");

  // si le texte est vide, on le remplit, sinon on l'enlève
  if (textElement.innerHTML === "") {
    textElement.innerHTML = "room";
  } else {
    textElement.innerHTML = "";
  }
  // récupère l'élément p avec l'id "text"
  var textElement2 = document.getElementById("room2");

  // si le texte est vide, on le remplit, sinon on l'enlève
  if (textElement2.innerHTML === "") {
    textElement2.innerHTML = "room";
  } else {
    textElement2.innerHTML = "";
  }
  // récupère l'élément p avec l'id "text"
  var textElement3 = document.getElementById("room3");

  // si le texte est vide, on le remplit, sinon on l'enlève
  if (textElement3.innerHTML === "") {
    textElement3.innerHTML = "room";
  } else {
    textElement3.innerHTML = "";
  }

  document.getElementById("opacity").style.opacity = "0.5";

  changerColor();
  maFonction();
}
function changerColor() {
  document
    .querySelectorAll("#ham")
    .forEach(
      span =>
        (span.style.backgroundColor =
          span.style.backgroundColor === "grey" ? "white" : "grey")
    );
}

var estTransparent = false;
function maFonction() {
  var maDiv = document.getElementById("opacity");
  if (estTransparent) {
    maDiv.style.opacity = 0;
    maDiv.style.display = "none";
    estTransparent = false;
  } else {
    maDiv.style.opacity = 1;
    maDiv.style.display = "block";
    estTransparent = true;
  }
}
