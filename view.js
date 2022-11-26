import { getPokemons } from "./api.js";
const cardsElement = document.querySelector(".cards");

const statsFrenchEnum = {
  HP: "Vie",
  attack: "Attaque",
  defense: "Défense",
  special_attack: "Attaque spéciale",
  special_defense: "Défense spéciale",
  speed: "Vitesse"
};

const createPokemonStatsCard = (stats) => {
  const statsHtml = Object.entries(stats).reduce((html, [key, value]) => {
    return html += `
      <p>
        <span>${statsFrenchEnum[key]} : </span>
        <span>${value}</span>
      </p>
      `;
  }, "");

  return `
  <div class="stats-card">
    ${statsHtml}
  </div>
  `;
};

const createPokemonFaceCard = ({ id, image, name }) => {
  return `
  <div class="face-card">
    <span>${id}.${name}</span>
    <img src=${image}>
  </div>
`;
};

export const createPokemonCardHtml = (pokemon) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.innerHTML = `
    ${createPokemonFaceCard(pokemon)}
    ${createPokemonStatsCard(pokemon.stats)}
  `;
  return cardElement;
};


export const createAndDisplayPokemonCards = async () => {
  const pokemonsData = await getPokemons();

  pokemonsData.forEach(pokemonData => {
    const pokemonCard = createPokemonCardHtml(pokemonData);
    cardsElement.insertAdjacentElement("beforeend", pokemonCard);
  });
};

