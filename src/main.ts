import './style.css'
import Granite from './granite';

const posts = [
  'https://dr.savee-cdn.com/things/6/2/54b67a0f844f4a8d63b87b.jpg',
  'https://dr.savee-cdn.com/things/6/2/549127c2bdc69ec2cf453d.jpg',
  'https://dr.savee-cdn.com/things/6/2/54685a0f844f4a8d605668.jpg',
  'https://dr.savee-cdn.com/things/6/2/51dbad9f4a147eed1dde34.jpg',
  'https://dr.savee-cdn.com/things/6/2/4c7fb175fffa000d68cc7b.jpg',
  'https://dr.savee-cdn.com/things/6/2/4a932ed07d1685fda7d213.jpg',
  'https://dr.savee-cdn.com/things/6/2/4b87b6560e31f75d96b414.jpg',
  'https://dr.savee-cdn.com/things/6/1/0d5413248fe06411494ddd.png',
  'https://dr.savee-cdn.com/things/6/2/4b1d1a2f8fa0f76cc88a2e.jpg',
  'https://dr.savee-cdn.com/things/6/2/45ead34b6e4183f9c3dbda.jpg',
  'https://dr.savee-cdn.com/things/6/2/45eacc4b6e4183f9c3db94.jpg'
];

const el = document.getElementById('app')!;

const pageContent = (el: HTMLElement) => {
    for (let i = 0; i < 100; ++i) {
      const post = posts[i % posts.length];
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.innerHTML = `<img loading="lazy" src="${post}">`;
      el.appendChild(cell);
  };
}


pageContent(el);


new Granite({
  el: el,
  childSelector: '.cell',
  columnClassName: 'granite-column',
  gridClassName: 'granite',
});
