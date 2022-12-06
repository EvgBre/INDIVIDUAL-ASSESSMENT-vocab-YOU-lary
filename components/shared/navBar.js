import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
    <img id="logo" src="https://png.pngtree.com/png-vector/20191022/ourmid/pngtree-dictionary-of-english-language-icon-cartoon-style-png-image_1837699.jpg">
        <a class="navbar-brand title" href="#">Vocab-YOU-lary</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="all-vocab">
                All Vocabulary <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="tech-list">Tech</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="html-list">HTML</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#" id="css-list">CSS</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#" id="javascript-list">JavaScript</a>
        </li>
            <li>
            <input
              class="form-control mr-sm-2"
              id="search"
              placeholder="Search words"
              aria-label="Search"
            />
            </li>
          </ul>
          <span class="navbar-text">
            <div id="cart-button"></div>
            <div id="logout-button"></div>
          </span>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
