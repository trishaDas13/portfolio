//todo ------- particles for background -------
(function () {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#FFFFFF" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#FFFFFF" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#FFFFFF",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 7,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });
})();

//todo -------- update live text --------
let typed = new Typed(".auto-type",{
  strings: ["Frontend Developer", "UI/UX Developer", "Web developer","Web Designer"],
  typeSpeed: 150,
  backspeed: 150,
  loop: true,
});

//todo -------- responsive navbar design --------
let bar = document.querySelector('.bar');
let dropdown = document.querySelector('.responsive-navbar');

bar.addEventListener('click', ()=>{
  if(dropdown.style.display == 'none'){
    dropdown.style.display = 'inline';
  }
  else{
    dropdown.style.display = 'none';
  }
});