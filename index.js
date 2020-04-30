// handlers for changing background color on click (home page buttons)
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');


button1.addEventListener('click', function() {
    document.getElementById('top').classList.remove('weave');
    document.getElementById('top').classList.remove('graphing');
    document.getElementById('top').classList.add('honeycomb');})

button2.addEventListener('click', function() {
    document.getElementById('top').classList.remove('honeycomb');
    document.getElementById('top').classList.remove('weave');
    document.getElementById('top').classList.add('graphing');})


button3.addEventListener('click', function() {
    document.getElementById('top').classList.remove('honeycomb');
    document.getElementById('top').classList.remove('graphing');
    document.getElementById('top').classList.add('weave');
})

// image gallery for projects section
function imageGallery() {
    const highlight = document.querySelector('.gallery-highlight');
    const previews = document.querySelectorAll('.project-preview img')

    previews.forEach(preview => {
        preview.addEventListener('click', function() {
            const smallSrc = this.src;
            const bigSrc = smallSrc.replace('small', 'big');
            highlight.src = bigSrc;
            previews.forEach(preview => preview.classList.remove('project-active'));
            preview.classList.add('project-active');
        })
    })
}

imageGallery();

// smooth scroll
function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    console.log('targetPosition: ', targetPosition);
    var startPosition = window.pageYOffset;
    console.log('startPosition: ', startPosition);
    // var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }


    function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}
// eventListeners for the above function
var home1 = document.querySelector('.home1');
var home2 = document.querySelector('.home2');
var home3 = document.querySelector('.home3');
var home4 = document.querySelector('.home4');

var aboutButton1 = document.querySelector('.about-button1');
var aboutButton2 = document.querySelector('.about-button2');
var aboutButton3 = document.querySelector('.about-button3');
var aboutButton4 = document.querySelector('.about-button4');
var aboutButton5 = document.querySelector('.about-button5');

var projectsButton1 = document.querySelector('.projects-button1');
var projectsButton2 = document.querySelector('.projects-button2');
var projectsButton3 = document.querySelector('.projects-button3');
var projectsButton4 = document.querySelector('.projects-button4');
var projectsButton5 = document.querySelector('.projects-button5');

var contactButton1 = document.querySelector('.contact-button1');
var contactButton2 = document.querySelector('.contact-button2');
var contactButton3 = document.querySelector('.contact-button3');
var contactButton4 = document.querySelector('.contact-button4');
var contactButton5 = document.querySelector('.contact-button5');

var blogButton1 = document.querySelector('.blog-button1');
var blogButton2 = document.querySelector('.blog-button2');
var blogButton3 = document.querySelector('.blog-button3');
var blogButton4 = document.querySelector('.blog-button4');
var blogButton5 = document.querySelector('.blog-button5');



home1.addEventListener('click', function(e) {e.preventDefault(); smoothScroll('#top', 400);});

home2.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#top', 400);});

home3.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#top', 400);});

home4.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#top', 400);});


aboutButton1.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#about', 400);});

aboutButton2.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#about', 400);});

aboutButton3.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#about', 400);});

aboutButton4.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#about', 400);});

aboutButton5.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#about', 400);});

projectsButton1.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#projects', 400);});

projectsButton2.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#projects', 400);});

projectsButton3.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#projects', 400);});

projectsButton4.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#projects', 400);});

projectsButton5.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#projects', 400);});

contactButton1.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#contact', 400);});

contactButton2.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#contact', 400);});

contactButton3.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#contact', 400);});

contactButton4.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#contact', 400);});

contactButton5.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#contact', 400);});

blogButton1.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#blog', 400);});

blogButton2.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#blog', 400);});

blogButton3.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#blog', 400);});

blogButton4.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#blog', 400);});

blogButton5.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#blog', 400);});

