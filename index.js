import { createAndDisplayPokemonCards } from "./view.js";

const loaderElement = document.querySelector(".loader");
let isFetchingData = false;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(async ({ isIntersecting }) => {
    if (isIntersecting && !isFetchingData) {
      isFetchingData = true;
      createAndDisplayPokemonCards();
      isFetchingData = false;
    }
  });
}, { rootMargin: "-50px" });


(async () => {
  createAndDisplayPokemonCards();
  observer.observe(loaderElement);
})();