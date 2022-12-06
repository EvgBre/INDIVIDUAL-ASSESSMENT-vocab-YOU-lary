import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Vocabulary</h1>';
  renderToDOM('#store', domString);
};

const showVocab = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Add a Word</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div id="view" class="card">
        <div class="card-body" style="height: 250px;">
          <h5 class="card-title bold">${item.title}</h5>
          <h5 class="card-title">${item.category}</h5>
            <p class="card-text">${item.definition}</p>
            <hr>
            <a href="#" id="edit-vocab-btn--${item.firebaseKey}" class="card-link">Edit</a>
            <a href="#" id="delete-vocab-btn--${item.firebaseKey}" class="card-link">Delete</a>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showVocab, emptyVocab };
