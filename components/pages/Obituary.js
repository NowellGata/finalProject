function buildNavHTML(stateLinks) {
    return stateLinks
        .map(
            (link) =>
            `<li><a href="/${link.text.toLowerCase()}" data-navigo>${link.text}</a></li>`
        )
        .join(' ');
}

export default (state) => `
<h1>TwoFlower</h1>
<h2>Obituary for [Deceased Name Here]</h2>
<h3>This will render the photo of the deceased</h3>
<h3>This will render the obit</h3>
<h3>This will render the remainder of the information of the DECEASED</h3>
`;