 const iplocation = "https://api.ipgeolocation.io/ipgeo?apiKey=ac5bd16432bb4e91bf20c2625f615d4f";

   $.getJSON(iplocation, (data) => {

     const ip = data.ip;
     const country = data.country_name ? data.country_name : 'your country';

     $("p#ip").html(`<p class="top-right">${ip} ${country}</p>`);
   })

titleChanger = (text, delay) => {
  if (!text) return;

  delay = delay || 2000;

  let counter = 0;

  setInterval(() => {
    if (counter < text.length) document.title = text[counter++];
    else document.title = text[(counter = 0)];
  }, delay);
};

titleChanger(["micy.cloud", "Micychalek#1888"], 2000);

cheet('l o l', function () {
  let audio = new Audio("../assets/others/gecs.mp3")
  audio.play()
  document.getElementById("logo").src = "../assets/others/lol.gif";
});

function thoughts() {
  const element = document.querySelector('#content')
    element.text = 'if you can see this you are awesome :3'

    fetch('https://www.reddit.com/r/Showerthoughts.json?raw_json=1&amp;limit=10')
      .then(res => res.text())
      .then(text => {
        if (!text) {
          element.text = 'what are you using? internet explorer? it didnt let me get reddit posts >:('
          return
        }

        const body = JSON.parse(text)
        const posts = body.data.children.filter(p => !p.data.pinned && !p.data.stickied)
        const post = posts[Math.floor(Math.random() * posts.length)]

        let title = post.data.title.trim()

        if (!title.endsWith('.')) title += '.'

        title = title.toLowerCase()
        title += ' '
        element.textContent = title

        const attr = document.createElement('a')
        attr.setAttribute('href', post.data.url)
        attr.setAttribute('target', '_blank')
        attr.innerText = post.data.author.toLowerCase()
        element.appendChild(attr)
      })
      .catch(e => {
        console.error(e)
        element.textContent = 'something went wrong :('
      })
}