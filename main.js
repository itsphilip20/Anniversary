// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll(".our-story, .timeline-item").forEach((el) => {
  observer.observe(el);
});

function updateCountdown() {
  // Replace this date with your actual anniversary date
  const anniversaryDate = new Date("2023-08-23"); // Example date
  const now = new Date();
  
  let years = now.getFullYear() - anniversaryDate.getFullYear();
  let months = now.getMonth() - anniversaryDate.getMonth();
  let days = now.getDate() - anniversaryDate.getDate();
  
  // Adjust for negative days
  if (days < 0) {
    months--;
    // Get the last day of the previous month
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
  }
  
  // Adjust for negative months
  if (months < 0) {
    years--;
    months += 12;
  }
  
  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
}

updateCountdown();
setInterval(updateCountdown, 86400000); // Update daily

// Add scroll effect to navbar
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav-container");
  if (window.scrollY > 100) {
    nav.style.background = "rgba(255, 255, 255, 0.98)";
    nav.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  } else {
    nav.style.background = "rgba(255, 255, 255, 0.95)";
    nav.style.boxShadow = "none";
  }
});

