setTimeout(() => {
  document.getElementById("logo-screen").style.display = "none";
  document.getElementById("content").classList.remove("hidden");
}, 2000);

const voted = localStorage.getItem("hasVoted");

document.querySelectorAll(".vote-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (localStorage.getItem("hasVoted")) {
      alert("Vote déjà enregistré");
      return;
    }

    localStorage.setItem("hasVoted", "true");
    btn.textContent = "VOTE ENREGISTRÉ";
    btn.style.background = "#444";
  });
});
