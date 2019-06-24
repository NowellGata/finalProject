import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';

import * as states from './store';

import { capitalize } from 'lodash';
import Navigo from 'navigo';
import axios from 'axios';
import ObitEmail from './components/pages/ObitEmail';

const root = document.querySelector('#root');

// router is required to help our router handle localhost addresses
const router = new Navigo(window.location.origin);

function render(state) {
    root.innerHTML = `
    ${Navigation(state)}
    ${Content(state)}
    ${Footer(state)}
`;

    router.updatePageLinks();
}

function handleRoutes(params) {
    render(states[capitalize(params.path)])
};

router
    .on(':path', (handleRoutes))
    .on('/', () => render(states.Home))
    .resolve();

// For Bereaved and Benefactor buttons
function bereaved() {
    render(states.bereaved)
};

function benefactor() {
    render(states.benefactor)
};

// For Benefactor yes/no question
function beneYes() {
    render(states.BenefactorYes)
};

function beneNo() {
    render(states.BenefactorNope)
};

function validateForm() {
    const x = document.forms["nameValid"]["firstVerif"].value;
    const y = document.forms["nameValid"]["lastVerif"].value;
    // We may want to input a John Doe name here
    if (x !== "John") {
        alert("Check Deaceased First Name");
        if (y !== "Doe") {
            alert("Check Deceased Last Name");
        }
        return (x, y)
        `<h3> is the name of the deceased. Would you like to donate?</h3>`;
    }



}






// INCLUDE ALL EVENT LISTENER CLICKS
// DOCUMENT API LINK FOR: Mailchimp/Mandrill, PayPal

// axios
//     .get('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => {
//         console.log('before each');
//         response.data.forEach((post) => states.Blog.posts.push(post));
//         if(router.lastRouteResolved().params && router.lastRouteResolved().params.path === 'blog'){
//             render(states.Blog);
//             console.log(states);
//         }
//     });

// document.querySelector("#globe").addEventListener("click", function change() {
//     let colors = document.body.style.backgroundColor;
//     console.log(colors);
//     if (colors === "white") {
//         document.body.style.backgroundColor = "black";
//     } else {
//         document.body.style.backgroundColor = "white";
//     }
// });

// Doug's Fancy Globe
// document.querySelector("#globe").addEventListener("click", function() {
//   let colors = document.body.style.backgroundColor;
//   let x = document.getElementsByClassName("list");
//   var i;
//   if (colors === "white") {
//     for (i = 0; i < x.length; i++) {
//       x[i].style.color = "black";
//     }
//   } else {
//     for (i = 0; i < x.length; i++) {
//       x[i].style.color = "white";
//     }
//   }
// });