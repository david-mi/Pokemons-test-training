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

  const pokemonStatsCard = document.createElement("div");
  pokemonStatsCard.classList.add("stats-card");
  pokemonStatsCard.innerHTML = statsHtml;

  return pokemonStatsCard;
};

const createPokemonFaceCard = ({ id, image, name }) => {
  const pokemonFaceCard = document.createElement("div");
  pokemonFaceCard.classList.add("face-card");
  pokemonFaceCard.innerHTML = `
    <span>${id}.${name}</span>
    <img src=${image}>
  `;

  return pokemonFaceCard;
};

const createPokemonCard = (pokemon) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.addEventListener("click", ({ currentTarget }) => {
    const faceCard = currentTarget.querySelector(".face-card");
    const statsCard = currentTarget.querySelector(".stats-card");
    currentTarget.classList.toggle("turn");
    faceCard.classList.toggle("hide");
    statsCard.classList.toggle("show");
  });

  cardElement.append(createPokemonFaceCard(pokemon), createPokemonStatsCard(pokemon.stats));
  return cardElement;
};

export const createAndDisplayPokemonCards = async () => {
  const pokemonsData = await getPokemons();

  pokemonsData.forEach(pokemonData => {
    const pokemonCard = createPokemonCard(pokemonData);
    cardsElement.insertAdjacentElement("beforeend", pokemonCard);
  });
};

