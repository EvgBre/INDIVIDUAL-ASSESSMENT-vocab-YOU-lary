import navBar from '../components/shared/navBar';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navigationEvents from '../events/navigationEvents';

const startApp = () => {
  domBuilder(); // BUILD THE DOM

  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  // TODO: Put all books on the DOM on App load
//   getBooks().then((books) => showBooks(books));
//   getAuthors().then((authors) => showAuthors(authors));
};

export default startApp;
