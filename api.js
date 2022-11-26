import { paginateArray, paginateOptions } from "./utils.js";

export const getPokemons = async () => {
  const url = `https://pokebuildapi.fr/api/v1/pokemon/limit/${paginateOptions.arrayEnd}`;
  const response = await fetch(url);
  const pokemonsData = await response.json();
  console.log(pokemonsData);
  return paginateArray(pokemonsData);
};