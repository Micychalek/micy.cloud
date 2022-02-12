let background = document.getElementById('background');
let images = [
    './assets/img/wallpaper1.gif',
    './assets/img/wallpaper2.gif',
    './assets/img/wallpaper3.gif',
    './assets/img/wallpaper4.gif',
    './assets/img/wallpaper5.gif',
    './assets/img/wallpaper6.gif',
    './assets/img/wallpaper7.gif',
    './assets/img/wallpaper8.gif',
    './assets/img/wallpaper9.gif',
    './assets/img/wallpaper10.gif',
    './assets/img/wallpaper11.gif',
    './assets/img/wallpaper12.gif',
    './assets/img/wallpaper13.gif',
    './assets/img/wallpaper14.gif',
    './assets/img/wallpaper15.gif',
    './assets/img/wallpaper16.gif',
    './assets/img/wallpaper17.gif',
    './assets/img/wallpaper18.gif'
]
let linearGrade = '#000000d9, #000000d9';
let randInt = Math.floor(Math.random()*images.length)
function displayImage() {
    background.style.backgroundImage = `linear-gradient(${linearGrade}), url(${images[randInt]})`;
}
