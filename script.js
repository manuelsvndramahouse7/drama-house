// INTRO → CONTENU
setTimeout(() => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("content").classList.remove("hidden");
}, 2000);

// 1 VOTE PAR APPAREIL
if (!localStorage.getItem("votes")) {
  localStorage.setItem("votes", JSON.stringify({}));
}

const votes = JSON.parse(localStorage.getItem("votes"));
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  const id = card.dataset.id;
  const btn = card.querySelector("button");

  if (votes[id]) {
    card.classList.add("voted");
    btn.disabled = true;
  }

  btn.addEventListener("click", () => {
    if (Object.keys(votes).length >= 1) {
      alert("Vous avez déjà voté !");
      return;
    }

    votes[id] = true;
    localStorage.setItem("votes", JSON.stringify(votes));

    card.classList.add("voted");
    btn.disabled = true;

    // Animation
    card.style.transform = "scale(0.9)";
    setTimeout(() => {
      card.style.transform = "scale(1)";
    }, 200);
  });
});
