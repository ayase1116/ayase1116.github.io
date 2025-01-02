const carousel = document.querySelector('#carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Static list of image file names
const images = [
    'img/o-1263.jpg',
    'img/85B34663-EF10-4C08-A721-EA9A6BC2561D.JPEG',
    'img/709A9573-BEBA-41A5-A6DA-91AB2957896A.JPEG',
    'img/DD46708D-7048-4FC8-8655-7819F07311CF.JPEG',
    'img/E4872409-A2F2-4291-BB89-96AE3653B4C3.jpg',
    'img/IMG_9866.JPG',
    'img/dep_Z097559.JPG',
    'img/IMG_6322.JPG',
    'img/00A6B679-9702-4937-8BFC-74E2004F77D3.JPG',
    'img/20240509_1623.JPG',
    'img/IMG_4038.jpg',
    'img/IMG_5421.jpg',
    'img/IMG_5427.jpg',
];

// Populate the carousel with static images
images.forEach(file => {
    const imgElement = document.createElement('img');
    imgElement.src = file;
    imgElement.alt = `Gallery Image`;
    carousel.appendChild(imgElement);
});

let currentIndex = 0;

function updateCarousel() {
    const carouselWidth = carousel.offsetWidth;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(-${currentIndex * carouselWidth}px)`;
}

// Move to the next image
nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

// Move to the previous image
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});
