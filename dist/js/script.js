const scrollUp = document.getElementById("scroll-up");

window.addEventListener("scroll", function () { 
  if (window.scrollY > 500) {
    scrollUp.classList.add("scroll-active");
  } else {
    scrollUp.classList.remove("scroll-active");
  } 
});