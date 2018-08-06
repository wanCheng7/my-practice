require('./index.scss');

let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
let htmlDom = document.documentElement;
htmlDom.style.fontSize = htmlWidth / 10 + 'px';

window.addEventListener('resize', function(e) {
	let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
	htmlDom.style.fontSize = htmlWidth / 10 + 'px';
})