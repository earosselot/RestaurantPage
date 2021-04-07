
function menuLoad(content) {
    content.innerHTML = "";

    const title = document.createElement('h1');
    title.textContent = 'Menu';
    content.appendChild(title);

    const Menu = [{'foto': 'img/menu/cazuela_mariscos.jpg', 'nombre': 'Cazuela de Mariscos', 'precio': 500}, 
    {'foto': 'img/menu/lomo_champiñon.jpg', 'nombre': 'Lomo al Champiñon', 'precio': 600}, 
    {'foto': 'img/menu/paella.jpg', 'nombre': 'Paella', 'precio': 650}, 
    {'foto': 'img/menu/rissotto_langostinos.jpg', 'nombre': 'Rissotto de Langostinos', 'precio': 700}];

    Menu.forEach((element) => {

        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('text-center');
        card.setAttribute('style', 'width: 18rem;');

        const cardImage = document.createElement('img');
        cardImage.setAttribute('src', element['foto']);

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = element['nombre'];

        const cardText = document.createElement('h6');
        cardText.classList.add('card-text');
        cardText.textContent = `$ ${element['precio']}`;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardImage);
        card.appendChild(cardBody);
        content.appendChild(card);
    });

    
}

export {menuLoad};