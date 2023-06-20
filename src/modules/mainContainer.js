const d = document;

const app = d.getElementById('app');

const mainContainer = app.appendChild(d.createElement('section'));
mainContainer.classList.add('main-container');

export { d, app, mainContainer };