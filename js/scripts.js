"use strict";

/**
 * =============================================================================
 * Constantes Navigations
 * =============================================================================
 */
const navPresentation = document.getElementById("nav-presentation");
const navRealisations = document.getElementById("nav-realisations");
const navCompetences  = document.getElementById("nav-competences");
const navContact      = document.getElementById("nav-contact");

/**
 * =============================================================================
 * Constantes Buttons filters
 * =============================================================================
 */
const btnAll = document.getElementById("btn-all");
const btnInt = document.getElementById("btn-int");
const btnDev = document.getElementById("btn-dev");

/**
 * =============================================================================
 * Constantes Cards
 * =============================================================================
 */
const cardContainer = document.getElementById("cards_container");

/**
 * =============================================================================
 * Constantes Cards
 * =============================================================================
 */
const cardRedWolf   = document.getElementById("card-red-wolf");
const cardJohnDoe   = document.getElementById("card-john-doe");
const cardCupOfTea  = document.getElementById("card-cup-of-tea");
const cardCarrousel = document.getElementById("card-carrousel");

/**
 * =============================================================================
 * Constandes des Tableaux des Cards
 * =============================================================================
 */
const tabAllCards = [cardRedWolf, cardJohnDoe, cardCupOfTea, cardCarrousel];
const tabCardsInt = [cardRedWolf, cardJohnDoe, cardCupOfTea];
const tabCardsDev = [cardCarrousel];

/**
 * =============================================================================
 * Event Click Navigations
 * =============================================================================
 */
navPresentation.addEventListener("click", function() {
  // console.log("coucou je suis presentation");
  if ( !navPresentation.classList.contains("active") ) {
    navPresentation.classList.add("active");
    navRealisations.classList.remove("active");
    navContact.classList.remove("active");
    navCompetences.classList.remove("active");
  }
});

navRealisations.addEventListener("click", function() {
  // console.log("coucou je suis realisations");
  if ( !navRealisations.classList.contains("active") ) {
    navRealisations.classList.add("active");
    navPresentation.classList.remove("active");
    navContact.classList.remove("active");
    navCompetences.classList.remove("active");
  }
});

navCompetences.addEventListener("click", function() {
  // console.log("coucou je suis competences");
  if ( !navCompetences.classList.contains("active") ) {
    navCompetences.classList.add("active");
    navPresentation.classList.remove("active");
    navRealisations.classList.remove("active");
    navContact.classList.remove("active");
  }
});

navContact.addEventListener("click", function() {
  // console.log("coucou je suis contact");
  if ( !navContact.classList.contains("active") ) {
    navContact.classList.add("active");
    navPresentation.classList.remove("active");
    navRealisations.classList.remove("active");
    navCompetences.classList.remove("active");
  }
});

/**
 * =============================================================================
 * Event Click Buttons Filters
 * =============================================================================
 */
btnAll.addEventListener("click", function(event) {
  event.preventDefault();
  // console.log("coucou je suis le btn-all");
  if ( !btnAll.classList.contains("btn-active") ) {
    btnAll.classList.add("btn-active");
    btnInt.classList.remove("btn-active");
    btnDev.classList.remove("btn-active");

    cardContainer.innerHTML = "";
    checkContentWithLoading( tabAllCards );

  }

});

btnInt.addEventListener("click", function(event) {
  event.preventDefault();
  // console.log("coucou je suis le btn-int");
  if ( !btnInt.classList.contains("btn-active") ) {
    btnInt.classList.add("btn-active");
    btnAll.classList.remove("btn-active");
    btnDev.classList.remove("btn-active");

    cardContainer.innerHTML = "";
    checkContentWithLoading( tabCardsInt );
  }
});

btnDev.addEventListener("click", function(event) {
  event.preventDefault();
  // console.log("coucou je suis le btn-dev");
  if ( !btnDev.classList.contains("btn-active") ) {
    btnDev.classList.add("btn-active");
    btnAll.classList.remove("btn-active");
    btnInt.classList.remove("btn-active");

    cardContainer.innerHTML = "";
    checkContentWithLoading( tabCardsDev );
  }
});


function loading() {
  const loading = document.createElement("img");
  loading.setAttribute("id", "loading");
  loading.setAttribute = "src";
  loading.src = "https://i.ya-webdesign.com/images/minimalist-transparent-loading-gif-9.gif";
  loading.setAttribute = "alt";
  loading.alt = "Image de chargement";
  loading.style.maxWidth = "250px";

  cardContainer.style.display = "flex";
  cardContainer.style.justifyContent = "center";
  cardContainer.style.alignItems = "center";
  cardContainer.append(loading);
}

function checkContentWithLoading( tabCards ) {
  const timing = setTimeout( function() {
    loading();
    const timingIntern = setTimeout(function() { 
      // au cout d'une seconde je charge le contenu
      clearTimeout(timing);
      const hideLoading = document.getElementById("loading");
      hideLoading.style.display = "none";
      for( const cards of tabCards ) {
        cardContainer.append(cards);
      }
    }, 1000, function() { 
      clearTimeout(timingIntern);
    });
  },0) // instentanément je charge le loader créer
}