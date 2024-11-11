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
const flecheGauche = document.querySelector(".arrow_left"); // Flèche pour naviguer vers l'image précédente
const flecheDroite = document.querySelector(".arrow_right"); // Flèche pour naviguer vers l'image suivante
const imageBanniere = document.querySelector(".banner-img"); // Image principale du diaporama
let indiceImage = 0; // Indice de l'image actuellement affichée
let texteBanniere = document.querySelector("#banner p"); // Texte de description de l'image affichée

// Ajout des points indicateurs (bullet points) pour la navigation dans le slider
let pointsIndicateurs = document.querySelector(".dots");
for (let i = 0; i < slides.length; i++) {
  const bullet = document.createElement("div");
  bullet.classList.add("dot");
  pointsIndicateurs.appendChild(bullet);
}

/**
 * Sélectionne et met à jour le point de navigation actif.
 * @param {number} indiceImage - L'indice de l'image actuellement affichée.
 */
function selectionnerPoint(indiceImage) {
  const tousLesPoints = document.querySelectorAll(".dot");
  // Réinitialisation de l'état de sélection de tous les points
  for (let i = 0; i < tousLesPoints.length; i++) {
    tousLesPoints[i].classList.remove("dot_selected");
  }
  // Activation du point correspondant à l'image actuelle
  tousLesPoints[indiceImage].classList.add("dot_selected");
}

/**
 * Charge et affiche l'image, le texte et sélectionne le point correspondant à l'indice fourni.
 * @param {number} indiceImage - L'indice de l'image à afficher.
 */
function chargerDiapositive(indiceImage) {
  imageBanniere.src = `./assets/images/slideshow/${slides[indiceImage].image}`;
  texteBanniere.innerHTML = slides[indiceImage].tagLine;
  selectionnerPoint(indiceImage);
}

// Chargement initial : affichage de la première image et sélection du premier point de navigation
chargerDiapositive(indiceImage);

// Clic sur la flèche gauche
// Si l'on est sur la première image, on revient à la dernière (boucle)
flecheGauche.addEventListener("click", () => {
  indiceImage = indiceImage === 0 ? slides.length - 1 : indiceImage - 1;
  chargerDiapositive(indiceImage);
});

// Clic sur la flèche droite
// Si l'on est sur la dernière image, on revient à la première (boucle)
flecheDroite.addEventListener("click", () => {
  indiceImage = indiceImage === slides.length - 1 ? 0 : indiceImage + 1;
  chargerDiapositive(indiceImage);
});
