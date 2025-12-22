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
  if (message) message.textContent = "⛔ Votes ouverts de 10h à 22h";
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
    disableButtons();
  });
});

function disableButtons() {
  document.querySelectorAll("button").forEach(btn => btn.disabled = true);
}
