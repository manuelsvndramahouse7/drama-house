const buttons = document.querySelectorAll(".vote-btn");

// si déjà voté
if (localStorage.getItem("voted")) {
  buttons.forEach(btn => {
    btn.textContent = "VOTE ENREGISTRÉ";
    btn.classList.add("disabled");
    btn.disabled = true;
  });
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (localStorage.getItem("voted")) return;

    localStorage.setItem("voted", "true");

    buttons.forEach(b => {
      b.textContent = "VOTE ENREGISTRÉ";
      b.classList.add("disabled");
      b.disabled = true;
    });
  });
});
