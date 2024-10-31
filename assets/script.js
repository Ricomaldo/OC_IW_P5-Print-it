const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Déclaration des variables
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
let j = 0; /*correspond au numéro de l'image affichée*/
let textBanner = document.querySelector("#banner p");

// Ajout des bullet points vides au slider
let dots = document.querySelector(".dots");
for (let i = 0; i < slides.length; i++) {
  const bullet = document.createElement("div");
  bullet.classList.add("dot");
  dots.appendChild(bullet);
}

// Fonction pour selectionner le dot
function selectDot(j) {
  const allDots = document.querySelectorAll(".dot");
  for (let i = 0; i < allDots.length; i++) {
    allDots[i].classList.remove("dot_selected");
  }
  allDots[j].classList.add("dot_selected");
}

// Première image au chargement
bannerImg.src = `./assets/images/slideshow/${slides[j].image}`;
selectDot(j);

// Clic sur la flèche gauche
arrowLeft.addEventListener("click", () => {
  if (j === 0) {
    j = slides.length - 1;
  } else {
    j = j - 1;
  }
  selectDot(j);
  bannerImg.src = `./assets/images/slideshow/${slides[j].image}`;
  textBanner.innerHTML = slides[j].tagLine;
});

// Clic sur la flèche droite
arrowRight.addEventListener("click", () => {
  if (j === slides.length - 1) {
    j = 0;
  } else {
    j = j + 1;
  }
  selectDot(j);
  bannerImg.src = `./assets/images/slideshow/${slides[j].image}`;
  textBanner.innerHTML = slides[j].tagLine;
});
