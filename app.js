// Random Text Effect
const words = ["Web developer", "Future Global Leader", "Programmer", "Citizen Scientist", "Avid Learner", "Global Youth Ambassador", "Critical thinker", "Entrepreneur", "Software Engineer", "Debater", "Team Player", "Visionary"];
const dynamicText = document.getElementById('randomText');
const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let currentWordIndex = 0;

function getNextWord() {
    const word = words[currentWordIndex];
    currentWordIndex = (currentWordIndex + 1) % words.length;
    return word;
}

function getRandomChar() {
    return randomChars[Math.floor(Math.random() * randomChars.length)];
}

function displayRandomChars(word, interval) {
    let currentIndex = 0;
    const randomInterval = setInterval(() => {
        if (currentIndex < word.length) {
            dynamicText.textContent = word.substring(0, currentIndex) + getRandomChar();
            currentIndex++;
        } else {
            clearInterval(randomInterval);
            dynamicText.textContent = word;
        }
    }, interval);
}

function startRandomTextEffect() {
    const word = getNextWord();
    const randomInterval = Math.floor(Math.random() * 100) + 50; 
    displayRandomChars(word, randomInterval);
}

function showInitialDots() {
    dynamicText.classList.add('blinking');
    setTimeout(() => {
        dynamicText.classList.remove('blinking');
        startRandomTextEffect();
        setInterval(startRandomTextEffect, 3000); 
    }, 3000); 
}

showInitialDots();



/* -- Glow effect -- */

const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

// Mouse Pointer Effect
document.addEventListener('mousemove', (e) => {
    const blob = document.querySelector('.blob');
    const hero = document.querySelector('.hero');
    const heroRect = hero.getBoundingClientRect();
    const navbar = document.querySelector('.navbar');
    const navbarRect = navbar.getBoundingClientRect();

    if (
        e.clientX >= heroRect.left &&
        e.clientX <= heroRect.right &&
        e.clientY >= heroRect.top &&
        e.clientY <= heroRect.bottom &&
        e.clientY > navbarRect.bottom
    ) {
        blob.style.transform = `translate(${e.clientX - 50}px, ${e.clientY - 50}px)`;
        blob.style.opacity = 1;
    } else {
        blob.style.opacity = 0;
    }
});

document.addEventListener('mouseout', () => {
    const blob = document.querySelector('.blob');
    blob.style.opacity = 0;
});

// Start Effect
let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);
    
    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 6))
}

// Scroll effect
document.addEventListener('scroll', () => {
    const textBox = document.querySelector('#note');
    const rect = textBox.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      textBox.classList.add('visible');
    }
  });

// Fade-in effect
  document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.btn');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 200);
    });
});