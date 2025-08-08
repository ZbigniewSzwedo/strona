
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const status = document.getElementById("status");
  status.textContent = "Dziękujemy za wiadomość! Skontaktujemy się wkrótce.";
  status.style.color = "green";
  this.reset();
});
