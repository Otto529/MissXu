
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}, 500);


setTimeout(() => {
  window.location.href = "sweet.html";
}, 5000);
