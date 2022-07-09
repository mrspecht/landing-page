'use strict';

function onEvent(selector, event, callback) {
  return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
  return parent.querySelector(selector);
}

function sleep(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  });
}

setInterval(function () {element.innerHTML += "Hello"}, 1000);

const contact = select('.contact');
const more = select('.more');
const intro = select('.intro');
const section = select('section');
let n = 0;

sleep(300).then(() => section.classList.add('isvisible'));
sleep(900).then(() => more.classList.add('isvisible'));

const content = [
  'Hello, world. I\'m <h1>Andre Specht</h1>, a full-stack<br> developer and instructor based in Winnipeg',
  'I\'m a passionate developer focused on <br>crafting beautiful and functional websites',
  'I also love teaching and helping others to turn <br>ideas into interactive applications',
  'Do you want to know more? Get in touch. <br>I look forward to hearing from you'
];

onEvent(more, 'click', () => {
  more.innerText = (n === 2) ? 'again?' : 'more';

  if (n === 3) {
    intro.innerHTML = content[n = 0];
    return;
  }

  intro.innerHTML = content[++n];
});

// onEvent(contact, 'click', () => {
//   window.location.assign('https://andrespecht.com/');
// });

setInterval(

)
