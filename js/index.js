// Your code goes here
// Header image mouseover
document.querySelector('.intro img').addEventListener('mouseover', (e) => {
    e.target.style.border = '3px solid black';
    setTimeout(() => {
        e.target.style.border = '';
    }, 1500)
});

// Remove main content images on keydown with 'a'
const img = document.querySelectorAll('.img-content img');
const mainContent = document.querySelectorAll('.content-section');
window.addEventListener('keydown', (e) => {
    if (e.keyCode == '65') {
        // firstImg.style.border = '3px solid red';
        img[0].style.display = 'none';
        img[1].style.display = 'none';
        mainContent[0].style.width = '100%';
    }   
});
// Add back in main content images with keyup with 's'
window.addEventListener('keyup', (e) => {
    if (e.keyCode == '83') {
        // firstImg.style.border = '3px solid red';
        img[0].style.display = '';
        img[1].style.display = '';
        mainContent[0].style.width = '';
    }   
});

// Add make container with 100% of screen when resized
const wholePage = document.querySelector('.home');
window.addEventListener('resize', () => {
    wholePage.style.maxWidth = '100%';
    document.querySelector('.intro img').style.width = '100%';
});

// Added alert when page load
window.addEventListener('load', () => {
    alert('Welcome to Fun Bus!');
});

//Added click to add border and dbl click to remove border
document.querySelector('.intro').addEventListener('click', (e) => {
    e.target.style.border = '2px solid black';
});

document.querySelector('.intro').addEventListener('dblclick', (e) => {
    e.target.style.border = '';
});

// Added mouse enter and mouse out event of Intro h2
document.querySelector('.intro h2').addEventListener('mouseenter', (e) => {
    e.target.innerHTML = 'This is Fun Bus!';
});

document.querySelector('.intro h2').addEventListener('mouseout', (e) => {
    e.target.innerHTML = 'Welcome to Fun Bus!';
});

document.querySelector('.container').addEventListener('click', (e) => {
    console.log('container was clicked');
    e.stopPropagation();
    e.target.style.color = 'red';
});

document.querySelector('.content-destination p').addEventListener('click', (e) => {
    console.log('p was clicked');
    e.target.style.color = 'red';
});

document.querySelectorAll('.nav a').addEventListener('click', (e) => {
    e.preventDefault();
});