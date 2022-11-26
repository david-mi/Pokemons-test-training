import { handleLoader } from "./handlers.js";

export const paginateOptions = {
  offset: 0,
  limit: 20,

  get arrayEnd() {
    return this.offset + this.limit;
  },

  incrementOffset() {
    this.offset += this.limit;
  },

  resetOffset() {
    this.offset = 0;
  }
};

/**
 * Handle pagination on pokemons fetched data
 * 
 * - If paginated data is equal to filtered data, hide loader
 * 
 * @param {PokemonData} array 
 * @returns {PokemonData} 
 */

export const paginateArray = (array) => {
  const { offset, arrayEnd } = paginateOptions;
  const paginatedArray = array.slice(offset, arrayEnd);
  paginateOptions.incrementOffset();
  handleLoader();
  return paginatedArray;
};