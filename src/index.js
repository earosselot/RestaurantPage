import {pageLoad} from './page-load';
import {menuLoad} from './menu-load';
import {contactLoad} from './contact-load';
 
const content = document.getElementById('content');
const pageHead = document.getElementById('header');

const headLogo = document.createElement('img');
headLogo.setAttribute('src', 'img/logo_head.jpg');
pageHead.appendChild(headLogo);

// Nav Tabs creation
const navTabs = document.createElement('nav');
navTabs.classList.add('nav');
navTabs.classList.add('nav-pills');
navTabs.classList.add('nav-justified');

const sections = ['Home', 'Menu', 'Contact'];

sections.forEach( (item) => {
    const link = document.createElement('p');
    link.classList.add('nav-link');
    link.setAttribute('id', item);
    link.textContent = item;
    
    navTabs.appendChild(link);
})

pageHead.appendChild(navTabs);

// Nav tabs event listeners
const homeTab = document.getElementById('Home');
const menuTab = document.getElementById('Menu');
const contactTab = document.getElementById('Contact');
const tabs = document.querySelectorAll('.nav-link');

function deleteActiveClass(tabs) {
    tabs.forEach( (tab) => {
        tab.classList.remove('active');
    })
}

homeTab.addEventListener('click', () => { 
    pageLoad(content);
    deleteActiveClass(tabs);
    homeTab.classList.add('active'); 
});
menuTab.addEventListener('click', () => { 
    menuLoad(content);
    deleteActiveClass(tabs);
    menuTab.classList.add('active');
});
contactTab.addEventListener('click', () => { 
    contactLoad(content);
    deleteActiveClass(tabs);
    contactTab.classList.add('active');
});

// Home Page default load
homeTab.classList.add('active'); 
pageLoad(content);
