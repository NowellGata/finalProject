function buildNavHTML(stateLinks) {
    return stateLinks
        .map(
            (link) =>
            `<li><a href="/${link.text.toLowerCase()}" data-navigo>${link.text}</a></li>`
        )
        .join(' ');
}

export default (state) => `
<h1>Well, thank you for listening!</h1>
<h2>Death is the reminder that there is life left to live.</h2>
<h3>Here is a cat gif for your grieving pleasure.</h3>
<div class="kitty">
  <img src="https://i.imgur.com/C2TyjIS.gif" name="hellokitty" value="cats">
</div>
`;

// FEATURE: Implement Cat Gif API to display a random gif of a cat.