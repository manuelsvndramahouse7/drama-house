window.addEventListener("load", () => {
  const sound = document.getElementById("introSound");

  // sécurité mobile (iPhone)
  sound.volume = 0.8;

  // joue le son à l'ouverture
  sound.play().catch(() => {
    console.log("Le son nécessite une interaction utilisateur");
  });

  // après l'intro (ex: 3 secondes)
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 3000);
});
window.addEventListener("click", () => {
  const sound = document.getElementById("introSound");
  sound.play();
}, { once: true });
