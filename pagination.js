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
 * @param {PokemonData} array 
 * @returns {PokemonData} 
 */

export const paginateArray = (array) => {
  const { offset, arrayEnd } = paginateOptions;
  const paginatedArray = array.slice(offset, arrayEnd);
  paginateOptions.incrementOffset();
  return paginatedArray;
};