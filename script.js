// INTRO
setTimeout(() => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("app").classList.remove("hidden");
}, 2000);

// VOTE UNIQUE PAR APPAREIL
const alreadyVoted = localStorage.getItem("voted");

document.querySelectorAll(".vote-btn").forEach((btn) => {
  btn.addEventListener("click", () => {

    if (alreadyVoted) {
      alert("Tu as déjà voté !");
      return;
    }

    const card = btn.parentElement;
    card.classList.add("voted");

    localStorage.setItem("voted", "true");

    document.querySelectorAll(".vote-btn").forEach(b => b.disabled = true);
  });
});
