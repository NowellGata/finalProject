function buildNavHTML(stateLinks) {
    return stateLinks
        .map((link) =>
            `<li><a href="/${link.text.toLowerCase()}" data-navigo>${link.text}</a></li>`
        )
        .join(' ');
}
export default (state) => `
<!--Navbar-->
<nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
  <div class="container">
    <a class="navbar-brand" href="#"><strong>TwoFlower</strong></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent-7">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://vigorous-kilby-054661.netlify.com/">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://vigorous-kilby-054661.netlify.com/blog">Blog</a>
        </li>
      </ul>
      <form class="form-inline">
       
      </form>
    </div>
  </div>
</nav>
<!-- Navbar -->
`;