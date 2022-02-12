var preloadSection = document.getElementById("preloader");
var preloadParagraph = document.getElementById("preloaderP");
var preloadFinish = document.getElementById("preloadF");
window.addEventListener("load", () => {
    async function section() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        preloadSection.style.height = "0";
    }
    async function paragraph() {
        await new Promise(resolve => setTimeout(resolve, 300));
        preloadParagraph.style.opacity = "0";
    }

      
    paragraph();
    section();
})