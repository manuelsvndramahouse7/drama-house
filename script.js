// FIN DE L’INTRO
setTimeout(() => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("content").style.display = "block";
}, 2600);

// ANIMATION DE VOTE
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
  });
});
