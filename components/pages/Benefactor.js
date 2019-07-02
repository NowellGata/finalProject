function buildNavHTML(stateLinks) {
    return stateLinks
        .map(
            (link) =>
            `<button type="${link.type}" id="${link.id}" class="${link.class}"> ${link.text}</button>`
        )
        .join(' ');
}

export default (state) =>
`
<div class= "jumbotron">
<body>
<h1 class="display-1">TwoFlower</h1>
<h1 class="display-4">Would you like to donate Acts of Kindness to the bereaved? </h1>
${buildNavHTML(state.link.secondary)}
</body>
</div>
;`