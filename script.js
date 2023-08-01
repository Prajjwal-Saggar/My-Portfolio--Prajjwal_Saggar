//  typing-animation
const dynamicText = document.querySelector(".animation");

const words = ["Web Development  ", "Coding  ", "Designing  ", "Freelancing  "];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;
  dynamicText.classList.add("stop-blinking");

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    dynamicText.classList.remove("stop-blinking");
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
};

typeEffect();

//  ------------------ open-modulo-----------------
    const open = document.querySelector("#hamburger");
    const hideHam = document.querySelector(".nav-item-3")
    const closeIcon = document.querySelector(".nav-item-4")
    // const close = document.querySelector('#close');

    function openModulo(){
     open.style.scale = 1;
    
     hideHam.style.scale = 0;
     closeIcon.style.display = "block";
     
    };


    function closeModulo(){
      open.style.scale = 0;
      closeIcon.style.display = "none";
      hideHam.style.scale = 1;
    }









var page1Main = gsap.timeline();

gsap.from(".skills", {
  opacity: 0,
  scale: 1.25,
  scrollTrigger: {
    trigger: ".skills",
    scroller: ".wrapper",
    start: "top 80%",
    end: "bottom 90%",
    scrub: true,
    // markers:true
  },
});

gsap.from(".about", {
  opacity: 0,
  scale: 1.25,
  scrollTrigger: {
    trigger: ".about",
    scroller: ".wrapper",
    start: "top 80%",
    end: "bottom 50%",
    scrub: true,
    // markers:true
  },
});

page1Main.from(".mainLeft h1 ", {
  x: -500,
  opacity: 0,

  duration: 1.5,
  stagger: 0.5,
});

page1Main.from(".mainLeft a", {
  opacity: 0,

  duration: 0.5,
});

page1Main.from(".mainRight ",{
  opacity:0,
  duration:1
})
