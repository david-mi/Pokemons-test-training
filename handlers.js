let previousCard = null;

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
