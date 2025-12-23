const intro = document.getElementById("intro");
const content = document.getElementById("content");
const buttons = document.querySelectorAll(".vote-btn");
const loserBox = document.getElementById("loser");

// INTRO 2s
setTimeout(() => {
  intro.style.display = "none";
  content.classList.remove("hidden");
}, 2000);

// AFFICHER PERDANT SI EXISTE
const loser = localStorage.getItem("loser");
if (loser !== null) {
  loserBox.innerText = "❌ Le perdant est : Candidat " + (parseInt(loser) + 1);
}

// VOTE
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (localStorage.getItem("voted")) return;

    localStorage.setItem("voted", "true");
    buttons.forEach(b => b.disabled = true);

    btn.innerText = "VOTE ENREGISTRÉ";
  });
});
