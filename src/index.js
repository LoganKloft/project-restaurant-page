import './index.css';
import addHome from './home';
import addMenu from './menu';
import addContact from './contact';

const content = document.querySelector('.content');
addHome(content);
const home_option = document.querySelector('.home-option')
home_option.addEventListener('click', (e) => {
    content.innerHTML = '';
    menu_option.classList.remove('selected');
    contact_option.classList.remove('selected');
    e.target.classList.add('selected');
    addHome(content);
});
const menu_option = document.querySelector('.menu-option')
menu_option.addEventListener('click', (e) => {
    content.innerHTML = '';
    home_option.classList.remove('selected');
    contact_option.classList.remove('selected');
    e.target.classList.add('selected');
    addMenu(content);
});
const contact_option = document.querySelector('.contact-option')
contact_option.addEventListener('click', (e) => {
    content.innerHTML = '';
    menu_option.classList.remove('selected');
    home_option.classList.remove('selected');
    e.target.classList.add('selected');
    addContact(content);
});