export const handleCardClick = ({ currentTarget }) => {
  const faceCard = currentTarget.querySelector(".face-card");
  const statsCard = currentTarget.querySelector(".stats-card");
  currentTarget.classList.toggle("turn");
  faceCard.classList.toggle("hide");
  statsCard.classList.toggle("show");
};