const typewriterElement = document.getElementById("typewriter");

const words = [
  "Enterprise AI, Software & Digital Solutions",
  "Automation Built for Real Businesses",
  "Government-Ready Technology Services",
  "Modern Software for Modern Operations"
];

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typewriterElement.textContent = currentWord.substring(0, letterIndex - 1);
    letterIndex--;
  } else {
    typewriterElement.textContent = currentWord.substring(0, letterIndex + 1);
    letterIndex++;
  }

  let speed = isDeleting ? 45 : 75;

  if (!isDeleting && letterIndex === currentWord.length) {
    speed = 1600;
    isDeleting = true;
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 400;
  }

  setTimeout(typeWriter, speed);
}

typeWriter();

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const statNumbers = document.querySelectorAll(".stat h3");
let statsStarted = false;

function animateStats() {
  const statsSection = document.querySelector(".stats");
  const sectionTop = statsSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 120 && !statsStarted) {
    statsStarted = true;

    statNumbers.forEach((stat) => {
      const target = Number(stat.getAttribute("data-count"));
      let current = 0;
      const increment = Math.ceil(target / 80);

      const counter = setInterval(() => {
        current += increment;

        if (current >= target) {
          stat.textContent = target;
          clearInterval(counter);
        } else {
          stat.textContent = current;
        }
      }, 20);
    });
  }
}

window.addEventListener("scroll", animateStats);