import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
      <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
        <div class="form-group">
          <label for="title">Vocabulary</label>
          <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Vocabulary" value="${obj.title || ''}" required>
        </div>
        <div class="form-group">
          <label for="description">Definition</label>
          <textarea class="form-control" placeholder="Vocab Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
        </div>
        <div class="form-group">
        <label for="category">Category</label>
        <select class="form-control" placeholder="Select Category" id="category" name="vocabCategory" value="${obj.category || ''}" required>
          <option value="HTML" ${obj.category === 'HTML' ? 'selected' : ''}>HTML</option>
          <option value="CSS" ${obj.category === 'CSS' ? 'selected' : ''}>CSS</option>
          <option value="JavaScript" ${obj.category === 'JavaScript' ? 'selected' : ''}>JavaScript</option>
          <option value="Tech" ${obj.category === 'Tech' ? 'selected' : ''}>Tech</option>
        </select>
      </div>
        <button type="submit" class="btn btn-primary">Submit Vocab
        </button>
      </form>`;

  renderToDOM('#form-container', domString);
};
export default addVocabForm;
