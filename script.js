// Intro
setTimeout(() => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("content").classList.remove("hidden");
}, 2000);

// Vote unique par appareil
const voted = localStorage.getItem("voted");

document.querySelectorAll(".card button").forEach(btn => {
  btn.addEventListener("click", () => {
    if (voted) {
      alert("Vous avez déjà voté");
      return;
    }
    localStorage.setItem("voted", "true");
    btn.innerText = "VOTE ENREGISTRÉ";
    btn.disabled = true;
  });
});

// Affichage du perdant
const loser = localStorage.getItem("loser");
if (loser) {
  document.getElementById("loser").innerText =
    "🚨 Le perdant est le candidat " + loser;
}
