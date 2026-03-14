// typing animation for hero title

const text = "Python Developer • Full Stack Developer • AI/ML Enthusiast";
const typingElement = document.querySelector(".hero p");

let index = 0;

function typeText(){
if(index < text.length){
typingElement.textContent += text.charAt(index);
index++;
setTimeout(typeText,50);
}
}

typingElement.textContent="";
typeText();



// fade-in animation when scrolling

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

sections.forEach(section=>{
observer.observe(section);
});



// card hover tilt effect

const cards = document.querySelectorAll(".project-card, .service-card, .blog-card, .skill-card");

cards.forEach(card=>{

card.addEventListener("mousemove", e=>{

const rect = card.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width / 2;
const centerY = rect.height / 2;

const rotateX = (y - centerY) / 10;
const rotateY = (centerX - x) / 10;

card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave", ()=>{
card.style.transform = "rotateX(0) rotateY(0)";
});

});



// smooth navbar highlight while scrolling

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{
const sectionTop = section.offsetTop - 100;
if(pageYOffset >= sectionTop){
current = section.getAttribute("id");
}
});

navLinks.forEach(link=>{
link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}
});

});