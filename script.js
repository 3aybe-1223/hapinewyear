const message =
`Hi M!! I just wanted to wish you
a happy new year 🌸
yk wut I'm very proud of you for surviving 2025
ik youve faced daghang struggles and problems
but you overcome it, youre brave
and strong (with a soft heart)....

I hope this year brings you
lots of smiles, calm moments,
and things that make you happy.
You deserve a great one ✨

May God blesses you in every way.  
I’m here for you, always M.
I LOVE U AND I MISS U MARGARETTE💖  

Remember: you’re strong,  
you can overcome every struggle,  
and I’ll always support you, no matter what.

-Love, Ivy`;

let index = 0;
const speed = 45;
const textElement = document.getElementById("text");

function typeText() {
  if (index < message.length) {
    textElement.textContent += message.charAt(index);
    index++;
    setTimeout(typeText, speed);
  }
}

function reveal() {
  document.getElementById("extra").style.display = "block";
}

function openSurprise() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("content").classList.remove("hidden");
  popConfetti();
  typeText();
}

/* Confetti burst */
const colors = ["#ffb3e6", "#cdb4ff", "#ffc8dd", "#bde0fe"];

function popConfetti() {
  for (let i = 0; i < 60; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = "50vw";
    confetti.style.top = "50vh";
    confetti.style.setProperty("--x", (Math.random() * 400 - 200) + "px");
    confetti.style.setProperty("--y", (Math.random() * 400 - 200) + "px");
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 2500);
  }
}
