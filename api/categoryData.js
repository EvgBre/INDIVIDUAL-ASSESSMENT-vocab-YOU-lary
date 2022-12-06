import client from '../utils/client';

const endpoint = client.databaseURL;

const getCategories = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/category.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getVocabByCategory = (categoryId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="categoryId"&equalTo="${categoryId}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

export { getCategories, getVocabByCategory };
