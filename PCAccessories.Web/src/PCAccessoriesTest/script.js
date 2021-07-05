let container = document.getElementsByClassName('container');
let img = document.getElementsByTagName('img');

for(let i = 0; i < container.length; i++) {
    container[i].style.display = 'none';
}
for(let i = 0; i < img.length; i++) {
    img[i].style.display = 'none';
}

img[0].style.display = 'block';
container[0].style.animation = 'block-from-left 1.5s ease-in-out';
container[0].style.display ='block';

window.addEventListener('scroll', function() {
    let height = this.pageYOffset;
    if(height > 200) {
        img[1].style.display = 'block';
        img[1].style.animation = 'opacityBG 2s ease-in-out';
        container[1].style.display ='block';
        container[1].style.animation = 'block-from-right 1s ease-in-out';
    }
    if (height > 550) {
        img[2].style.display= 'block';
        img[2].style.animation = 'opacityBG 2s ease-in-out';
        container[2].style.display ='block';
        container[2].style.animation = 'block-from-left 1s ease-in-out';
    }
});