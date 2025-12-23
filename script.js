// VOTE AU CLIC
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {

    // Enlève le vote des autres
    cards.forEach(c => c.classList.remove("active"));

    // Active celle cliquée
    card.classList.add("active");
  });
});
