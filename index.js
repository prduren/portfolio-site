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
// eventListeners for smoothScroll function
var home1 = document.querySelector('.home1');
var aboutButton1 = document.querySelector('.about-button1');
var projectsButton1 = document.querySelector('.projects-button1');
var contactButton1 = document.querySelector('.contact-button1');
var blogButton1 = document.querySelector('.blog-button1');

home1.addEventListener('click', function(e) {e.preventDefault(); smoothScroll('#top', 400);});
aboutButton1.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#about', 400);});
projectsButton1.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#projects', 400);});
contactButton1.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#contact', 400);});
blogButton1.addEventListener('click', function(e) {e.preventDefault();smoothScroll('#blog', 400);});

// show a and p on projects page depending on which image is clicked

function showMe(l1,l2,l3,l4,p1,p2,p3,p4) {
    document.getElementById(l1).style.display = "block";
    document.getElementById(l2).style.display = "none";
    document.getElementById(l3).style.display = "none";
    document.getElementById(l4).style.display = "none";
    document.getElementById(p1).style.display = "block";
    document.getElementById(p2).style.display = "none";
    document.getElementById(p3).style.display = "none";
    document.getElementById(p4).style.display = "none";
  }

