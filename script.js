document.addEventListener("DOMContentLoaded", () => {
  const showBtn = document.getElementById("popupBtn");
  const popup = document.querySelector(".popup-card");
  const closeBtn = document.getElementById("closePopup");

  if (showBtn && popup) {
    showBtn.addEventListener("click", () => {
      popup.style.display = "flex";
    });
  }

  if (closeBtn && popup) {
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }
});
