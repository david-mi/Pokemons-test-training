import { pokemonsData } from "./data/data.js";

/**
 * Fetch pokemon data and set it to pokemonData object
 */

export const getPokemons = async () => {
  const url = `https://pokebuildapi.fr/api/v1/pokemon/`;
  const response = await fetch(url);
  const pokemonsApiData = await response.json();
  pokemonsData.full = pokemonsApiData;
  pokemonsData.filtered = pokemonsApiData;
};