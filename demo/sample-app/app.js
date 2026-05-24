const btn = document.getElementById("cta");
const status = document.getElementById("status");

btn?.addEventListener("click", () => {
  status.textContent = "Button clicked!";
});
