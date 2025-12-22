const message = document.getElementById("message");
const hour = new Date().getHours();
const today = new Date().toLocaleDateString();

// 🔁 Reset automatique chaque jour
if (localStorage.getItem("lastVoteDay") !== today) {
  localStorage.removeItem("hasVoted");
  localStorage.setItem("lastVoteDay", today);
}

// ⏰ Votes ouverts de 10h à 22h
if (hour < 10 || hour >= 22) {
  if (message) message.textContent = message.innerHTML = "⛔ VOTES TERMINÉS — RENDEZ-VOUS DEMAIN À 10H";
  disableButtons();
}

// 🔒 Déjà voté aujourd’hui
if (localStorage.getItem("hasVoted")) {
  if (message) message.textContent = "✅ Tu as déjà voté aujourd’hui";
  disableButtons();
}

// 🗳️ Vote
document.querySelectorAll(".candidate button").forEach(button => {
  button.addEventListener("click", () => {
    const id = button.parentElement.dataset.id;

    let votes = JSON.parse(localStorage.getItem("votes")) || [0,0,0,0];
    votes[id - 1]++;
    localStorage.setItem("votes", JSON.stringify(votes));

    localStorage.setItem("hasVoted", "true");

    message.textContent = "🔥 Vote enregistré !";
    event.target.style.transform = "scale(0.9)";disableButtons();
  });
});

function disableButtons() {
  document.querySelectorAll("button").forEach(btn => btn.disabled = true);
}
const messageFin = document.getElementById("message");
if (messageFin) {
  messageFin.innerHTML = "⛔ VOTES TERMINÉS — RENDEZ-VOUS DEMAIN À 10H";
  messageFin.style.color = "red";
  messageFin.style.fontWeight = "bold";
}
// 🎬 Intro Netflix sound + vibration
const introSound = document.getElementById("intro-sound");

document.addEventListener("click", () => {
  // Son
  if (introSound && introSound.paused) {
    introSound.volume = 0.8;
    introSound.play();
  }

  // 📳 Vibration mobile (si supportée)
  if (navigator.vibrate) {
    navigator.vibrate([60, 40, 60]);
  }
}, { once: true });
