// https://www.w3schools.com/howto/howto_js_lightbox.asp

// Open the Modal
function openModal() {
    document.getElementById('modal').style.display = 'block';
}

// Close the Modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
    window.location.href = '#';
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var
        i,
        slides = document.getElementsByClassName('slides'),
        dots = document.getElementsByClassName('demo'),
        captionText = document.getElementById('caption');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    slides.title = 'Focus and copy link to this slide (Enter)';
    dots[slideIndex - 1].className += ' active';
    captionText.innerHTML = dots[slideIndex - 1].alt;
};

if (window.location.href.endsWith('#hero-secret-base')) {
    openModal();
    currentSlide(1);
    console.log('🧑🏼‍🚀Opened Hero Secret Base in the modal.');
};

if (window.location.href.endsWith('#rubys-starry-retreat')) {
    openModal();
    currentSlide(2);
    console.log("⭐Opened Ruby's Starry Retreat in the modal.");
};

if (window.location.href.endsWith('#flower-art-atelier')) {
    openModal();
    currentSlide(3);
    console.log('🌺Opened Flower-Art Atelier in the modal.');
};

if (window.location.href.endsWith('#garden-of-regeneration')) {
    openModal();
    currentSlide(4);
    console.log('🏡Opened Garden of Regeneration in the modal.');
};

if (window.location.href.endsWith('#paradise-cafe')) {
    openModal();
    currentSlide(5);
    console.log('🧋Opened Paradise Cafe in the modal.');
};

if (window.location.href.endsWith('#phylliss-mail-office')) {
    openModal();
    currentSlide(6);
    console.log("🏤Opened Phyllis's Mail Office in the modal.");
};

if (window.location.href.endsWith('#paradise-resturant')) {
    openModal();
    currentSlide(7);
    console.log('🍽️Opened Paradise Resturant in the modal.');
};

if (window.location.href.endsWith('#soothing-spa-vacation')) {
    openModal();
    currentSlide(8);
    console.log('🏖️Opened Soothing Spa Vacation in the modal.');
};

if (window.location.href.endsWith('#paradise-hospital')) {
    openModal();
    currentSlide(9);
    console.log('🏥Opened Paradise Hospital in the modal.');
};

if (window.location.href.endsWith('#paradise-school')) {
    openModal();
    currentSlide(10);
    console.log('🏫Opened Paradise School in the modal.');
};