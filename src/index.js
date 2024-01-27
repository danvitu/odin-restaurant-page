import { mainPage } from "./pageload";
import { menuPage } from "./menu";
import { contactsPage } from "./contacts";

const homeButton = document.querySelector('.home-btn');
const menuButton = document.querySelector('.menu-btn');
const contactsButton = document.querySelector('.contacts-btn');
const content = document.querySelector('#content');

mainPage();

homeButton.addEventListener('click', () => {
  content.textContent = '';
  mainPage();
});

menuButton.addEventListener('click', () => {
  content.textContent = '';
  menuPage();
});

contactsButton.addEventListener('click', () => {
  content.textContent = '';
  contactsPage();
});

console.log('Everything in the right place');