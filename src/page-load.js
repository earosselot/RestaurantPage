
function pageLoad(content) {
    // const content = document.getElementById('content');

    content.innerHTML = "";

    const carousel = document.createElement('div');
    carousel.setAttribute('id', 'carousel');
    carousel.classList.add('carousel');
    carousel.classList.add('slide');
    carousel.setAttribute('data-bs-ride', 'carousel');

    const carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel-inner');

    const carouselIndicators = document.createElement('div');
    carouselIndicators.classList.add('carousel-indicators');

    const images = ['img/foto-afuera2.jpg', 'img/restaurant.jpg', 'img/foto-pizarra.jpg']
    images.forEach((image, i) => {
        let carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        carouselItem.setAttribute('data-bs-interval', '2000');
        
        let carouselIndicatorsButton = document.createElement('button');
        carouselIndicatorsButton.setAttribute('type', 'button');
        carouselIndicatorsButton.setAttribute('data-bs-target', '#carousel');
        carouselIndicatorsButton.setAttribute('data-bs-slide-to', i);
        carouselIndicatorsButton.setAttribute('aria-label', `Slide ${i + 1}`);

        if (i === 0) {
            carouselItem.classList.add('active');
            carouselIndicatorsButton.setAttribute('aria-current', 'true');
            carouselIndicatorsButton.classList.add('active');
        }

        let carouselImage = document.createElement('img');
        carouselImage.setAttribute('src', image);
        carouselImage.classList.add('d-block');
        carouselImage.classList.add('w-100');

        carouselIndicators.appendChild(carouselIndicatorsButton);
        carouselItem.appendChild(carouselImage);
        carouselInner.appendChild(carouselItem);
    })
    
    const carouselControlPrev = document.createElement('button');
    carouselControlPrev.classList.add('carousel-control-prev');
    carouselControlPrev.setAttribute('type', 'button');
    carouselControlPrev.setAttribute('data-bs-target', '#carousel');
    carouselControlPrev.setAttribute('data-bs-slide', 'prev')
    const carouselControlPrevSpan = document.createElement('span');
    carouselControlPrevSpan.classList.add('carousel-control-prev-icon');
    carouselControlPrevSpan.setAttribute('aria-hidden', 'true');

    const carouselControlNext = document.createElement('button');
    carouselControlNext.classList.add('carousel-control-next');
    carouselControlNext.setAttribute('type', 'button');
    carouselControlNext.setAttribute('data-bs-target', '#carousel');
    carouselControlNext.setAttribute('data-bs-slide', 'next')
    const carouselControlNextSpan = document.createElement('span');
    carouselControlNextSpan.classList.add('carousel-control-next-icon');
    carouselControlNextSpan.setAttribute('aria-hidden', 'true');

    carousel.appendChild(carouselIndicators);
    carousel.appendChild(carouselInner);
    carouselControlPrev.appendChild(carouselControlPrevSpan);
    carousel.appendChild(carouselControlPrev);
    carouselControlNext.appendChild(carouselControlNextSpan);
    carousel.appendChild(carouselControlNext);

    content.appendChild(carousel);
}

export {pageLoad};


