import { pokemonsData } from "./data.js";

export const getPokemons = async () => {
  const url = `https://pokebuildapi.fr/api/v1/pokemon/`;
  const response = await fetch(url);
  const pokemonsApiData = await response.json();
  pokemonsData.full = pokemonsApiData;
  pokemonsData.filtered = pokemonsApiData;
};