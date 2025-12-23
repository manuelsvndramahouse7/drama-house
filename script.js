// INTRO → DISPARITION APRÈS 2s
setTimeout(() => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("app").classList.remove("hidden");
}, 2000);

// ANIMATION CLIC SUR CASE
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.remove("clicked");
    void card.offsetWidth;
    card.classList.add("clicked");
  });
});
