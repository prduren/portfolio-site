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