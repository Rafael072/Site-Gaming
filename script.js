let menu = document.querySelector('#menu-icon');
let list = document.querySelector('#list');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    list.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});
sr.reveal('.list',{delay:150, origin:'top'});
sr.reveal('.logo',{delay:150, origin:'top'});