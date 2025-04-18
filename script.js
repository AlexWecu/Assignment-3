// Nav Change

window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll("#colorChange2, #colorChange3, #colorChange4");  
    const scrollPosition = 800;
  
    elements.forEach(function (text) {
      if (window.scrollY > scrollPosition) {
        text.style.color = "black";
      } else {
        text.style.color = "white";
      }
    });
  });

  window.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      console.log("scrollY:", window.scrollY);
    });
  });

  // Icon Change

  window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll("#styleChange");
  
    let colorChangePosition = 800;
    let worksChangePosition = 2000;
    let wChangePosition = 2730;
    let philosophyChangePosition = 5770;
    let pChangePosition = 6500;

    if (window.matchMedia("(max-width: 800px)").matches) {
      colorChangePosition = 870;
      worksChangePosition = 1930;
      //wChangePosition = 2300;
      philosophyChangePosition = 3300;
      //pChangePosition = 3500;
    }
  
    elements.forEach(function (text) {
      if (window.scrollY > pChangePosition) {
        text.innerHTML = "P";
        text.style.color = "transparent";
        text.style.webkitTextStroke = "1.5px black";
  
        text.addEventListener("mouseover", function () {
          text.innerHTML = "PHILOSOPHY";
        });
  
        text.addEventListener("mouseout", function () {
          text.innerHTML = "P";
        });
      } else if (window.scrollY > philosophyChangePosition) {
        text.innerText = "PHILOSOPHY";
        text.style.color = "transparent";
        text.style.webkitTextStroke = "1.5px black";
      } else if (window.scrollY > wChangePosition) {
        text.innerHTML = "W";
        text.style.color = "transparent";
        text.style.webkitTextStroke = "1.5px black";
  
        text.addEventListener("mouseover", function () {
          text.innerHTML = "WORKS";
        });
  
        text.addEventListener("mouseout", function () {
          text.innerHTML = "W";
        });
      } else if (window.scrollY > worksChangePosition) {
        text.innerText = "WORKS";
        text.style.color = "transparent";
        text.style.webkitTextStroke = "1.5px black";
      } else if (window.scrollY > colorChangePosition) {
        text.innerText = "A·C";
        text.style.color = "transparent";
        text.style.webkitTextStroke = "1.5px black";
      } else {
        text.innerText = "A·C";
        text.style.color = "white";
        text.style.webkitTextStroke = "0px transparent";
      }
    });
  });
  
  // Text Hover Video

  const hoverText = document.querySelector(".hover-text");
  const video = document.querySelector(".popup-video");
  
  hoverText.addEventListener("mouseenter", () => {
    video.style.opacity = "1"; 
    video.style.transform = "translate(-50%, -50%) scale(1)"; 
    video.play(); 
  });
  
  hoverText.addEventListener("mousemove", (e) => {
    video.style.left = `${e.pageX}px`; 
    video.style.top = `${e.pageY}px`; 
  });
  
  hoverText.addEventListener("mouseleave", () => {
    video.style.opacity = "0"; 
    video.style.transform = "translate(-50%, -50%) scale(0)"; 
    video.pause(); 
    video.currentTime = 0; 
  });

  // Element Fade Up

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: unobserve once it has appeared
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3 // Trigger when 10% of the element is visible
  });

  const elements = document.querySelectorAll('.quote');
  elements.forEach(el => observer.observe(el));