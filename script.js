window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 2500); // durée de l’intro
});
