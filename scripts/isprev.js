// https://www.w3schools.com/howto/howto_js_lightbox.asp

// Open the Modal
function openModal() {
    document.getElementById('modal').style.display = 'block';
}

// Close the Modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
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
        captionText = document.getElementById('caption');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
    captionText.innerHTML = slides[slideIndex - 1].id.replace('-', 'iew ').replace('p', 'P');
}

if (window.location.href.endsWith('#prev-01')) {
    openModal();
    currentSlide(1);
    console.log('🖼️Opened island preview #1 in the modal.');
};

if (window.location.href.endsWith('#prev-02')) {
    openModal();
    currentSlide(2);
    console.log('🖼️Opened island preview #2 in the modal.');
};

if (window.location.href.endsWith('#prev-03')) {
    openModal();
    currentSlide(3);
    console.log('🖼️Opened island preview #3 in the modal.');
};

if (window.location.href.endsWith('#prev-04')) {
    openModal();
    currentSlide(4);
    console.log('🖼️Opened island preview #4 in the modal.');
};

if (window.location.href.endsWith('#prev-05')) {
    openModal();
    currentSlide(5);
    console.log('🖼️Opened island preview #5 in the modal.');
};

if (window.location.href.endsWith('#prev-06')) {
    openModal();
    currentSlide(6);
    console.log('🖼️Opened island preview #6 in the modal.');
};

if (window.location.href.endsWith('#prev-07')) {
    openModal();
    currentSlide(7);
    console.log('🖼️Opened island preview #7 in the modal.');
};

if (window.location.href.endsWith('#prev-08')) {
    openModal();
    currentSlide(8);
    console.log('🖼️Opened island preview #8 in the modal.');
};

if (window.location.href.endsWith('#prev-09')) {
    openModal();
    currentSlide(9);
    console.log('🖼️Opened island preview #9 in the modal.');
};

if (window.location.href.endsWith('#prev-10')) {
    openModal();
    currentSlide(10);
    console.log('🖼️Opened island preview #10 in the modal.');
};

if (window.location.href.endsWith('#prev-11')) {
    openModal();
    currentSlide(11);
    console.log('🖼️Opened island preview #11 in the modal.');
};

if (window.location.href.endsWith('#prev-12')) {
    openModal();
    currentSlide(12);
    console.log('🖼️Opened island preview #12 in the modal.');
};

if (window.location.href.endsWith('#prev-13')) {
    openModal();
    currentSlide(13);
    console.log('🖼️Opened island preview #13 in the modal.');
};

if (window.location.href.endsWith('#prev-14')) {
    openModal();
    currentSlide(14);
    console.log('🖼️Opened island preview #14 in the modal.');
};

if (window.location.href.endsWith('#prev-15')) {
    openModal();
    currentSlide(15);
    console.log('🖼️Opened island preview #15 in the modal.');
};

if (window.location.href.endsWith('#prev-16')) {
    openModal();
    currentSlide(16);
    console.log('🖼️Opened island preview #16 in the modal.');
};

if (window.location.href.endsWith('#prev-17')) {
    openModal();
    currentSlide(17);
    console.log('🖼️Opened island preview #17 in the modal.');
};

if (window.location.href.endsWith('#prev-18')) {
    openModal();
    currentSlide(18);
    console.log('🖼️Opened island preview #18 in the modal.');
};

if (window.location.href.endsWith('#prev-19')) {
    openModal();
    currentSlide(19);
    console.log('🖼️Opened island preview #19 in the modal.');
};

if (window.location.href.endsWith('#prev-20')) {
    openModal();
    currentSlide(20);
    console.log('🖼️Opened island preview #20 in the modal.');
};

if (window.location.href.endsWith('#prev-21')) {
    openModal();
    currentSlide(21);
    console.log('🖼️Opened island preview #21 in the modal.');
};

if (window.location.href.endsWith('#prev-22')) {
    openModal();
    currentSlide(22);
    console.log('🖼️Opened island preview #22 in the modal.');
};

if (window.location.href.endsWith('#prev-23')) {
    openModal();
    currentSlide(23);
    console.log('🖼️Opened island preview #23 in the modal.');
};

if (window.location.href.endsWith('#prev-24')) {
    openModal();
    currentSlide(24);
    console.log('🖼️Opened island preview #24 in the modal.');
};

if (window.location.href.endsWith('#prev-25')) {
    openModal();
    currentSlide(25);
    console.log('🖼️Opened island preview #25 in the modal.');
};

if (window.location.href.endsWith('#prev-26')) {
    openModal();
    currentSlide(26);
    console.log('🖼️Opened island preview #26 in the modal.');
};

if (window.location.href.endsWith('#prev-27')) {
    openModal();
    currentSlide(27);
    console.log('🖼️Opened island preview #27 in the modal.');
};

if (window.location.href.endsWith('#prev-28')) {
    openModal();
    currentSlide(28);
    console.log('🖼️Opened island preview #28 in the modal.');
};

if (window.location.href.endsWith('#prev-29')) {
    openModal();
    currentSlide(29);
    console.log('🖼️Opened island preview #29 in the modal.');
};

if (window.location.href.endsWith('#prev-30')) {
    openModal();
    currentSlide(30);
    console.log('🖼️Opened island preview #30 in the modal.');
};

if (window.location.href.endsWith('#prev-31')) {
    openModal();
    currentSlide(31);
    console.log('🖼️Opened island preview #31 in the modal.');
};

if (window.location.href.endsWith('#prev-32')) {
    openModal();
    currentSlide(32);
    console.log('🖼️Opened island preview #32 in the modal.');
};

if (window.location.href.endsWith('#prev-33')) {
    openModal();
    currentSlide(33);
    console.log('🖼️Opened island preview #33 in the modal.');
};

if (window.location.href.endsWith('#prev-34')) {
    openModal();
    currentSlide(34);
    console.log('🖼️Opened island preview #34 in the modal.');
};

if (window.location.href.endsWith('#prev-35')) {
    openModal();
    currentSlide(35);
    console.log('🖼️Opened island preview #35 in the modal.');
};

if (window.location.href.endsWith('#prev-36')) {
    openModal();
    currentSlide(36);
    console.log('🖼️Opened island preview #36 in the modal.');
};

if (window.location.href.endsWith('#prev-37')) {
    openModal();
    currentSlide(37);
    console.log('🖼️Opened island preview #37 in the modal.');
};

if (window.location.href.endsWith('#prev-38')) {
    openModal();
    currentSlide(38);
    console.log('🖼️Opened island preview #38 in the modal.');
};

if (window.location.href.endsWith('#prev-39')) {
    openModal();
    currentSlide(39);
    console.log('🖼️Opened island preview #39 in the modal.');
};

if (window.location.href.endsWith('#prev-40')) {
    openModal();
    currentSlide(40);
    console.log('🖼️Opened island preview #40 in the modal.');
};

if (window.location.href.endsWith('#prev-41')) {
    openModal();
    currentSlide(41);
    console.log('🖼️Opened island preview #41 in the modal.');
};

if (window.location.href.endsWith('#prev-42')) {
    openModal();
    currentSlide(42);
    console.log('🖼️Opened island preview #42 in the modal.');
};

if (window.location.href.endsWith('#prev-43')) {
    openModal();
    currentSlide(43);
    console.log('🖼️Opened island preview #43 in the modal.');
};

if (window.location.href.endsWith('#prev-44')) {
    openModal();
    currentSlide(44);
    console.log('🖼️Opened island preview #44 in the modal.');
};

if (window.location.href.endsWith('#prev-45')) {
    openModal();
    currentSlide(45);
    console.log('🖼️Opened island preview #45 in the modal.');
};

if (window.location.href.endsWith('#prev-46')) {
    openModal();
    currentSlide(46);
    console.log('🖼️Opened island preview #46 in the modal.');
};

if (window.location.href.endsWith('#prev-47')) {
    openModal();
    currentSlide(47);
    console.log('🖼️Opened island preview #47 in the modal.');
};

if (window.location.href.endsWith('#prev-48')) {
    openModal();
    currentSlide(48);
    console.log('🖼️Opened island preview #48 in the modal.');
};

if (window.location.href.endsWith('#prev-49')) {
    openModal();
    currentSlide(49);
    console.log('🖼️Opened island preview #49 in the modal.');
};

if (window.location.href.endsWith('#prev-50')) {
    openModal();
    currentSlide(50);
    console.log('🖼️Opened island preview #50 in the modal.');
};

if (window.location.href.endsWith('#prev-51')) {
    openModal();
    currentSlide(51);
    console.log('🖼️Opened island preview #51 in the modal.');
};