import { getPokemons } from "./api.js";
import { pokemonsData } from "./data/data.js";
import { handleCardClick } from "./handlers.js";
import { paginateArray } from "./pagination.js";
import { wait } from "./utils.js";
import { cardsElement } from "./constants.js";
import "./data/type.js";

const statsFrenchEnum = {
  HP: "Vie",
  attack: "Attaque",
  defense: "Défense",
  special_attack: "Attaque spéciale",
  special_defense: "Défense spéciale",
  speed: "Vitesse"
};


/**
 * @param {PokemonDataStats} stats
 * @returns {HTMLDivElement} stats pokemon card
 */

const createPokemonStatsCard = (stats) => {
  const statsHtml = Object.entries(stats).reduce((html, [key, value]) => {
    return html += `
      <p>
        <span>${statsFrenchEnum[key]} : </span>
        <span>${value}</span>
      </p>
      `;
  }, "");

  const pokemonStatsCard = document.createElement("div");
  pokemonStatsCard.classList.add("stats-card");
  pokemonStatsCard.innerHTML = statsHtml;

  return pokemonStatsCard;
};


/**
 * @param {PokemonData} 
 * @returns {HTMLDivElement} face pokemon card
 */

const createPokemonFaceCard = ({ id, image, name }) => {
  const pokemonFaceCard = document.createElement("div");
  pokemonFaceCard.classList.add("face-card");
  pokemonFaceCard.innerHTML = `
    <span>${id}.${name}</span>
    <img src=${image}>
  `;

  return pokemonFaceCard;
};


/**
 *  Create both face and stats card for a pokemon
 * 
 * @param {PokemonData} pokemon 
 * @returns {HTMLDivElement}
 */

const createPokemonCard = (pokemon) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.addEventListener("click", handleCardClick);

  cardElement.append(createPokemonFaceCard(pokemon), createPokemonStatsCard(pokemon.stats));
  return cardElement;
};


/**
 * - fetch pokemon data
 * - create pokemon cards
 * - display them
 */

export const createAndDisplayPokemonCards = async () => {
  pokemonsData.filtered
    ? await wait(500)
    : await getPokemons();

  const paginatedPokemons = paginateArray(pokemonsData.filtered);
  displayPokemonCards(paginatedPokemons);
};


/**
 * Display pokemons cards
 * 
 * @param {PokemonDataStats} paginatedPokemons 
 */

export const displayPokemonCards = (paginatedPokemons) => {
  paginatedPokemons.forEach(pokemonData => {
    const pokemonCard = createPokemonCard(pokemonData);
    cardsElement.insertAdjacentElement("beforeend", pokemonCard);
  });
};
