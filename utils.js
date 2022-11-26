export const paginateOptions = {
  offset: 0,
  limit: 20,
  get arrayEnd() {
    return this.offset + this.limit;
  },
  incrementOffset() {
    this.offset += this.limit;
  }
};

/**
 * Handle pagination on pokemons fetched data
 * 
 * @param {PokemonData} array 
 * @returns {PokemonData} 
 */

export const paginateArray = (array) => {
  const { offset } = paginateOptions;
  const paginatedArray = array.slice(offset);
  paginateOptions.incrementOffset();
  return paginatedArray;
};