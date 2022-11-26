import { handleSearchInput } from "./handlers.js";
import { createAndDisplayPokemonCards } from "./view.js";
import { loaderElement } from "./constants.js";

const searchInput = document.querySelector("input[type='text']");
searchInput.addEventListener("input", handleSearchInput);

let isFetchingData = false;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(async ({ isIntersecting }) => {
    if (isIntersecting && !isFetchingData) {
      isFetchingData = true;
      await createAndDisplayPokemonCards();
      isFetchingData = false;
    }
  });
}, { rootMargin: "-50px" });


(async () => {
  await createAndDisplayPokemonCards();
  observer.observe(loaderElement);
})();