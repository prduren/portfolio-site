
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


// document.getElementById('top').classList.remove('');

