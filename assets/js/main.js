// Mobile menu toggle
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    // Close mobile menu if open
    document.querySelector(".nav-links").classList.remove("active");
  });
});

// Scroll to top button visibility
window.addEventListener("scroll", function () {
  if (document.querySelector(".scroll-top")) {
    if (window.pageYOffset > 300) {
      document.querySelector(".scroll-top").style.display = "block";
    } else {
      document.querySelector(".scroll-top").style.display = "none";
    }
  }
});
