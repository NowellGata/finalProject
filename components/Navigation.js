function buildNavHTML(stateLinks) {
    return stateLinks
        .map((link) =>
            `<li><a href="/${link.text.toLowerCase()}" data-navigo>${link.text}</a></li>`
        )
        .join(' ');
}
export default (state) => `
  <nav>
  <ul>
    ${buildNavHTML(state.links.primary)}
  </ul>
  </nav>
`;