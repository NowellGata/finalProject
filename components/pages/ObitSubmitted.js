function buildNavHTML(stateLinks) {
    return stateLinks
        .map(
            (link) =>
            `<li><a href="/${link.text.toLowerCase()}" data-navigo>${link.text}</a></li>`
        )
        .join(' ');
}

export default (state) => `
<h1>Thank you from TwoFlower</h1>
<h2>Your Acts of Kindness and generous donations will greatly help the grieving family of DECEASED NAME HERE</h2>
`;