// INTRO
setTimeout(() => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("vote-section").classList.remove("hidden");
}, 3000);

// VOTE
function vote(id) {
  if (localStorage.getItem("hasVoted")) return;

  localStorage.setItem("hasVoted", "true");

  let votes = JSON.parse(localStorage.getItem("votes") || "{}");
  votes[id] = (votes[id] || 0) + 1;
  localStorage.setItem("votes", JSON.stringify(votes));

  document.querySelectorAll(".vote-btn").forEach(btn => {
    btn.disabled = true;
    btn.innerText = "VOTE ENREGISTRÉ";
  });
}

// AFFICHER PERDANT PUBLIC
const loser = localStorage.getItem("loser");
if (loser) {
  document.getElementById("loser").innerText =
    "Le perdant est le candidat #" + loser;
}
