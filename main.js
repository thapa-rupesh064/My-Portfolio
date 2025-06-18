
document.addEventListener("DOMContentLoaded", function () {
  let hamburger = document.querySelector(".hamburger");
  let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector(".close-btn");

  hamburger.addEventListener("click", () => {
    sidebar.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});
document.querySelector('.logo').addEventListener('click', function() {
  location.reload();
})