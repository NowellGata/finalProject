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
    clickHandler(state);
}

function handleRoutes(params) {
    render(states[capitalize(params.path)]);
}

router
    .on(':path', (handleRoutes))
    .on('/', () => render(states.Home))
    .resolve();
// // Create function to manage clicks on 
// function clickHandler(state) {
//     if (state.pageContent === "Benefactor") {

//         console.log("howdy!");
//         // For Benefactor.js yes/no question
//         const howdyHoo = document.querySelector('#beneName');
//         console.log(howdyHoo);
//         howdyHoo.addEventListener('submit', (e) => {
//             e.preventDefault();
//             render(state.Home);
//         });
//     };

//     if (state.pageContent === "Benefactor") {
//         const beneBye = document.querySelector('#beneBye');
//         beneBye.addEventListener('submit', (e) => {
//             e.preventDefault();
//             render(states.Home);
//         })
//     };
// };




// axios
//     .get('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => {
//         console.log('before each');
//         response.data.forEach((post) => states.Blog.posts.push(post));
//         if (router.lastRouteResolved().params && router.lastRouteResolved().params.path === 'blog') {
//             render(states.Blog);
//             console.log(states);
//         }
//     });



// Refactor event listeners one of these days...
// For Home.js Bereaved and Benefactor buttons
const bereave = document.querySelector('#bereaved');
bereave.addEventListener('click', (e) => {
    e.preventDefault();
    render(states.Bereaved);
});

const benefact = document.querySelector('#benefactor');
benefact.addEventListener('click', (e) => {
    e.preventDefault();
    render(states.Benefactor);
});


// if (pageContent === "Benefactor") {
//     console.log("howdy!");
//     // For Benefactor.js yes/no question
//     const beneName = document.querySelector('#Yes');
//     beneName.addEventListener('click', (e) => {
//         e.preventDefault();
//         render(states.BenefactorName);
//     });
// };


// // For validating name of DECEASED
// function validateForm() {
//     const x = document.forms["nameValid"]["firstVerif"].value;
//     const y = document.forms["nameValid"]["lastVerif"].value;
//     // We may want to input a John Doe name here
//     if (x !== "John") {
//         alert("Check Deceased First Name");
//         if (y !== "Doe") {
//             alert("Check Deceased Last Name");
//         }
//         return (x, y)
//         `<h3> is the name of the deceased. Would you like to donate?</h3>`;
//     }
// }


// PAYPAL API --> Github will not accept the sandbox version due to it being a public account containing sensitive information.
// Workaround idea: Export information to a server-side database in order to use API.

// const express = require('express');
// const ejs = require('ejs');
// const paypal = require('paypal');

// paypal.configure({
//     'mode': 'sandbox', //sandbox or live
//     'client_id': 'Ab_xtknbvX11aoyl93a4oyoyYxJ-sinQPzBILawktunp4PxSVoUKfQwCrLJaOfnpiIKxg1hwdYTGp-qC',
//     'client_secret': 'EDMS_HqBDaOG-Q-FBTOaOXVIt24wa-XgdpkIq0mME7hxGNXxTexsEvGHhtflGNQ6WtwEa-tIRos75UH9'
// });

// const app = express();

// app.set('view engine', 'ejs');

// app.get('/', (req, res) => res.render('index'));

// app.post('pay', (req, res) => {
//     const create_payment_json = {
//         "intent": "sale",
//         "payer": {
//             "payment_method": "paypal"
//         },
//         // Redirect assumption for http-server
//         "redirect_urls": {
//             "return_url": "http://localhost:8080/success",
//             "cancel_url": "http://localhost:8080/cancel"
//         },
//         "transactions": [{
//             "item_list": {
//                 "items": [{
//                     "name": "Donation",
//                     "sku": "001",
//                     "price": "25.00",
//                     "currency": "USD",
//                     "quantity": 1
//                 }]
//             },
//             "amount": {
//                 "currency": "USD",
//                 "total": "25.00"
//             },
//             "description": "TwoFlower Donation"
//         }]
//     };
//     paypal.payment.create(create_payment_json, function(error, payment) {
//         if (error) {
//             throw error;
//         } else {
//             for (let i = 0; 1 < payment.links.length; i++) {
//                 if (payment.links[i].rel === 'approval_url') {
//                     res.redirect(payment.links[i].href);
//                 }
//             }
//             // console.log("Create Payment Response");
//             // console.log(payment);
//             // res.send('test');
//         }
//     });

// });

// app.get('/success', (req, res) => {
//     const payerId = req.query.PayerID;
//     const paymentID = req.query.paymentId;

//     const execute_payment_json = {
//         "payer_id": payerId,
//         "transaction": [{
//             "amount": {
//                 "currency": "USD",
//                 "total": "25.00"
//             }
//         }]
//     };

//     paypal.payment.execute(paymentID, execute_payment_json, function(error, payment) {
//         if (error) {
//             console.log(error.response);
//             throw error;
//         } else {
//             console.log("Get payment response");
//             console.log(JSON.stringify(payment));
//             res.send('success');
//         }
//     });
// });

// app.get('/cancel', (req, res) => res.send('Cancelled'));

// app.listen(3000, () => console.log('Server Started'));

// INCLUDE ALL EVENT LISTENER CLICKS
// DOCUMENT API LINK FOR: Mailchimp/Mandrill, PayPal