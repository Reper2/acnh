// https://www.w3schools.com/howto/howto_js_lightbox.asp

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
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
        slides = document.getElementsByClassName("mySlides"),
        dots = document.getElementsByClassName("demo"),
        captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

if (window.location.href.endsWith('#hero-secret-base')) {
    openModal();
    currentSlide(1);
};

if (window.location.href.endsWith('#rubys-starry-retreat')) {
    openModal();
    currentSlide(2);
};

if (window.location.href.endsWith('#flower-art-atelier')) {
    openModal();
    currentSlide(3);
};

if (window.location.href.endsWith('#garden-of-regeneration')) {
    openModal();
    currentSlide(4);
};

if (window.location.href.endsWith('#paradise-cafe')) {
    openModal();
    currentSlide(5);
};

if (window.location.href.endsWith('#phylliss-mail-office')) {
    openModal();
    currentSlide(6);
};

if (window.location.href.endsWith('#paradise-resturant')) {
    openModal();
    currentSlide(7);
};

if (window.location.href.endsWith('#soothing-spa-vacation')) {
    openModal();
    currentSlide(8);
};

if (window.location.href.endsWith('#paradise-hospital')) {
    openModal();
    currentSlide(9);
};

if (window.location.href.endsWith('#paradise-school')) {
    openModal();
    currentSlide(10);
};