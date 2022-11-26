import { pokemonsData } from "./data/data.js";
import { paginateArray, paginateOptions } from "./pagination.js";
import { cardsElement, loaderElement } from "./constants.js";
import { displayPokemonCards } from "./view.js";
import "./data/type.js";

/** @type {Element | null} */
let previousCard = null;

let previousInput = null;

/**
 * Handle click on pokemon card
 * 
 * - Flip to show or hide stats on the card
 * - Hide previous card stats if showing stats from another one
 * 
 * @param {{currentTarget: Element}} currentTarget current clicked card or
 * {@link previousCard} 
 */

export const handleCardClick = ({ currentTarget }) => {
  if (previousCard?.classList.contains("turn") && previousCard !== currentTarget) {
    handleCardClick({ currentTarget: previousCard });
  }

  const faceCard = currentTarget.querySelector(".face-card");
  const statsCard = currentTarget.querySelector(".stats-card");
  currentTarget.classList.toggle("turn");
  faceCard.classList.toggle("hide");
  statsCard.classList.toggle("show");
  previousCard = currentTarget;
};

/**
 * Handle user input
 * 
 * - lowercase user input
 * - filter pokemons data where user input is inluded in pokemon name
 * - display filterd pokemon data
 * 
 * @param {InputEvent} target 
 */

export const handleSearchInput = ({ target }) => {
  const userInput = target.value.toLowerCase();

  if (userInput.startsWith(previousInput)) {
    filterPokemons(pokemonsData.filtered, userInput);
  } else {
    filterPokemons(pokemonsData.full, userInput);
  }

  paginateOptions.resetOffset();
  cardsElement.innerHTML = "";
  const paginatedPokemons = paginateArray(pokemonsData.filtered);
  displayPokemonCards(paginatedPokemons);
  previousInput = userInput;
};

/**
 * @param {PokemonData} pokemonsArray 
 * @param {string} userInput 
 */

const filterPokemons = (pokemonsArray, userInput) => {
  pokemonsData.filtered = pokemonsArray.filter(pokemon => {
    const pokemonName = pokemon.name.toLowerCase();
    return pokemonName.indexOf(userInput) !== -1;
  });
};

/**
 * Handle loader visibility
 * 
 * - if there is no more cards to load, hide it
 */

export const handleLoader = () => {
  if (paginateOptions.arrayEnd > pokemonsData.filtered.length) {
    loaderElement.classList.add("display-none");
  } else {
    loaderElement.classList.remove("display-none");
  }
};