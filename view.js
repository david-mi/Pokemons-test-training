import { getPokemons } from "./api.js";
const cardsElement = document.querySelector(".cards");

export const createPokemonCardHtml = ({ id, name, image }) => {
  return `
  <div class="card">
    <span>${id}.${name}</span>
    <img src=${image}>
  </div>
  `;
};

export const createAndDisplayPokemonCards = async () => {
  const pokemonsData = await getPokemons();

  pokemonsData.forEach(pokemonData => {
    const pokemonCard = createPokemonCardHtml(pokemonData);
    cardsElement.insertAdjacentHTML("beforeend", pokemonCard);
  });
};

