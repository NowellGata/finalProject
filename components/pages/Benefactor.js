function buildNavHTML(stateLinks) {
    return stateLinks
        .map(
            (link) =>
            `<li><a href="/${link.text.toLowerCase()}" data-navigo>${link.text}</a></li>`
        )
        .join(' ');
}

// Write HTML in Pages

export default (state) => `
<h1> TwoFlower</h1>
<h2> Would you like to donate Acts of Kindness or Money to the family of DECEASED?</h2>

<div class= "beneChoice">
  <button onclick="beneYes">Yes</button>
  <button onclick="beneNo">No</button>
</div>

`;