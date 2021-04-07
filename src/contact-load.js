
const contactLoad = (content) => {
    content.innerHTML = "";

    const title = document.createElement('h1');
    title.classList.add('text-center');
    title.textContent = 'Contact';

    const telephone = document.createElement('h3');
    telephone.classList.add('text-center');
    telephone.innerHTML = 'Telefono<br>(11) 1234 5678';

    content.appendChild(title);
    content.appendChild(telephone);
}

export {contactLoad};