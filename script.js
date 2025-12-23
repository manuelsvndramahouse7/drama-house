window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
  }, 2000);
});
