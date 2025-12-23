// Affiche le site après l'intro
setTimeout(() => {
  document.getElementById("app").classList.remove("hidden");
}, 2000);

// Vote unique
const voted = localStorage.getItem("voted");

document.querySelectorAll(".card button").forEach(btn => {
  btn.addEventListener("click", () => {
    if (voted) {
      alert("Tu as déjà voté !");
      return;
    }
    localStorage.setItem("voted", "true");
    btn.parentElement.style.opacity = "0.4";
    btn.textContent = "VOTÉ";
  });
});
