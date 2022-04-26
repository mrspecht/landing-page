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

const more = select('.more');
const intro = select('.intro');
const section = select('section');
let n = 0;

sleep(300).then(() => section.classList.add('isvisible'));
sleep(900).then(() => more.classList.add('isvisible'));

const content = [
  'Hello, world. I\'m <h1>Andre Specht</h1>, a full-stack<br> developer and instructor based in Winnipeg',
  'I am a passionate developer focused on<br>crafting beautiful and functional websites',
  'My programming skills include JavaScript,<br>TypeScript, React, Java, C#, and Python',
  'Do you want to know more? Get in touch<br>I look forward to hearing from you'
];

onEvent(more, 'click', () => {
  if (n >= 3) {
    intro.innerHTML = content[n = 0];
    return;
  }

  intro.innerHTML = content[++n];
});

const contact = select('#contact');
const modal = select('#contact-frame');
const overlay = select('#overlay');

onEvent(contact, 'click', () => {
  modal.classList.add('isvisible');
  overlay.classList.add('isvisible');
});

onEvent(overlay, 'click', (event) => {
  if (event.target.className === 'overlay' || event.target.className === 'isvisible') {
    modal.classList.remove('isvisible');
    overlay.classList.remove('isvisible');
  }
});

onEvent(document, 'keyup', (event) => {
  if (event.key === "Escape") {
    if (modal.classList.contains('isvisible') && overlay.classList.contains('isvisible')) {
      modal.classList.remove('isvisible');
      overlay.classList.remove('isvisible');
    }
  }
});
