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