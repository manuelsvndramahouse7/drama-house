// INTRO
setTimeout(() => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("votes").classList.remove("hidden");
}, 2000);

// FAUX VOTE (1 par appareil)
if (localStorage.getItem("voted")) {
  disableVotes();
}

document.querySelectorAll(".card button").forEach(button => {
  button.addEventListener("click", () => {
    if (localStorage.getItem("voted")) return;

    const card = button.parentElement;
    card.classList.add("voted");

    localStorage.setItem("voted", "true");
    disableVotes();
  });
});

function disableVotes() {
  document.querySelectorAll("button").forEach(btn => {
    btn.disabled = true;
    btn.textContent = "VOTE ENREGISTRÉ";
  });
}
