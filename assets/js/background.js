let background = document.getElementById('background');
let images = [
    './assets/img/wallpaper1.jpg',
    './assets/img/wallpaper2.jpg',
    './assets/img/wallpaper3.jpg',
    './assets/img/wallpaper4.jpg',
    './assets/img/wallpaper5.jpg',
    './assets/img/wallpaper6.jpg',
    './assets/img/wallpaper7.jpg',
    './assets/img/wallpaper8.jpg',
    './assets/img/wallpaper9.jpg',
    './assets/img/wallpaper10.jpg',
    './assets/img/wallpaper11.jpg',
    './assets/img/wallpaper12.jpg',
    './assets/img/wallpaper13.jpg',
    './assets/img/wallpaper14.jpg',
    './assets/img/wallpaper15.jpg',
    './assets/img/wallpaper16.jpg',
    './assets/img/wallpaper17.jpg',
    './assets/img/wallpaper18.jpg'
]
let linearGrade = '#000000d9, #000000d9';
let randInt = Math.floor(Math.random()*images.length)
function displayImage() {
    background.style.backgroundImage = `linear-gradient(${linearGrade}), url(${images[randInt]})`;
}
