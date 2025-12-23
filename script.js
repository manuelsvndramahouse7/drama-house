window.addEventListener("load", () => {
  setTimeout(() => {
    const intro = document.getElementById("intro");
    const content = document.getElementById("content");

    if (intro) intro.style.display = "none";
    if (content) content.style.display = "block";
  }, 3000);
});
