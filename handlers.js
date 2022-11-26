/** @type {Element | null} */
let previousCard = null;

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

export const handleLoader = () => {
  if (paginateOptions.arrayEnd > pokemonsData.filtered.length) {
    loaderElement.classList.add("display-none");
  } else {
    loaderElement.classList.remove("display-none");
  }
};