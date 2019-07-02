import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';

import * as states from './store';

import { capitalize } from 'lodash';
import Navigo from 'navigo';
// import axios from 'axios';
// import ObitEmail from './components/pages/ObitEmail';

// router is required to help our router handle localhost addresses
const router = new Navigo(window.location.origin);

const root = document.querySelector('#root');

function render(state) {
    root.innerHTML = `
    ${Navigation(state)}
    ${Content(state)}
    ${Footer(state)}
`;

    router.updatePageLinks();
}

function handleRoutes(params) {
    render(states[capitalize(params.path)]);
}

router
    .on(':path', (handleRoutes))
    .on('/', () => render(states.Home))
    .resolve();

// Refactor event listeners one of these days...
// For Home.js Bereaved and Benefactor buttons

const bereave = document.querySelector('#bereaved');
bereave.addEventListener('click', (e) => {
    e.preventDefault();
    location.href = '/bereaved';
});

const benefact = document.querySelector('#benefactor');
benefact.addEventListener('click', (e) => {
    e.preventDefault();
    location.href = '/benefactor';
});

const donateyes = document.querySelector('#beneName');
donateyes.addEventListener('click', (e) => {
    e.preventDefault();
    location.href = '/benefactordonate';
});