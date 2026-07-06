// ===== Typing Effect =====

const text = "Aspiring Business Analytics Professional";

const typing = document.getElementById("typing");

let i = 0;
let deleting = false;

function type() {

if (!deleting) {

typing.innerHTML = text.substring(0, i);

i++;

if (i > text.length) {

deleting = true;

setTimeout(type, 1500);

return;

}

} else {

typing.innerHTML = text.substring(0, i);

i--;

if (i < 0) {

deleting = false;

i = 0;

}

}

setTimeout(type, deleting ? 40 : 80);

}

type();


// ===== Particles Background =====

particlesJS("particles-js", {

particles: {

number: {

value: 90,

density: {

enable: true,

value_area: 800

}

},

color: {

value: "#00e5ff"

},

shape: {

type: "circle"

},

opacity: {

value: 0.4

},

size: {

value: 3,

random: true

},

line_linked: {

enable: true,

distance: 150,

color: "#00e5ff",

opacity: 0.3,

width: 1

},

move: {

enable: true,

speed: 2

}

},

interactivity: {

detect_on: "canvas",

events: {

onhover: {

enable: true,

mode: "grab"

},

onclick: {

enable: true,

mode: "push"

}

},

modes: {

grab: {

distance: 180,

line_linked: {

opacity: 1

}

},

push: {

particles_nb: 4

}

}

},

retina_detect: true

});


// ===== Fade Animation =====

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="1s";

observer.observe(section);

});