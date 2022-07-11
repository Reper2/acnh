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
    var i, slides = document.getElementsByClassName('slides');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex -1].style.display = 'block';
}

// Create all the previews
function placePrevs(x) {
    var num;
    for (num = 1; num <= x; num++) {
        const
            prevs = document.getElementById('prevs'),

            prevDiv = document.createElement('div'),
            prevLink = document.createElement('a'),
            prevImg = document.createElement('img'),
            prevNum = `prev-${String(num).padStart(2, '0')}`,
            prevSrc = `${prevNum}.jpg`,

            closeModalLink = document.createElement('a'),
            closeModalBtn = document.createElement('span'),

            modalContent = document.createElement('div'),
            modalPrev = document.createElement('div'),
            modalPrevLink = document.createElement('a'),
            modalPrevNumTxt = document.createElement('div'),
            modalPrevImg = document.createElement('img'),

            prevBtn = document.createElement('a'),
            nextBtn = document.createElement('a');

        prevs.className = 'row';
        modal.className = 'modal';

        // Images used to open the lightbox
        prevDiv.className = 'column';

        prevLink.href = `#${prevNum}`;

        prevImg.src = prevSrc;
        prevImg.onclick = openModal(), currentSlide(num);
        prevImg.className = 'hover-shadow';
        prevImg.style.width = '100%';

        prevLink.appendChild(prevImg);
        prevDiv.appendChild(prevLink);
        prevs.appendChild(prevDiv);

        // The modal/lightbox
        closeModalLink.href = '#';

        closeModalBtn.className = 'close cursor';
        closeModalBtn.onclick = closeModal();
        closeModalBtn.innerHTML = '&times;';

        modalContent.className = 'modal-content';

        modalPrev.id = prevNum;
        modalPrev.className = 'slides';

        modalPrevLink.href = `#${prevNum}`;
        modalPrevLink.onclick = copyLink();

        modalPrevNumTxt.className = 'numbertext';
        modalPrevNumTxt.innerHTML = `${num} / ${x}`;

        modalPrevImg.src = prevSrc;
        modalPrevImg.style.width = '100%';

        // Next/previous controls
        prevBtn.className = 'prev';
        prevBtn.onclick = plusSlides(-1);

        nextBtn.className = 'next';
        nextBtn.onclick = plusSlides(1);

        // Add all that to the html
        modalPrevLink.appendChild(modalPrevNumTxt);
        modalPrevLink.appendChild(modalPrevImg);
        modalPrev.appendChild(modalPrevLink);
        modalContent.appendChild(modalPrev);
        modalContent.appendChild(prevBtn);
        modalContent.appendChild(nextBtn);
        modal.appendChild(closeModalBtn);
        modal.appendChild(modalContent);

        if (window.location.href.endsWith(`#${prevNum}`)) {
            openModal();
            currentSlide(num);
            console.log(`🖼️Opened island preview #${num} in the modal.`);
        };
    }
}

// Place the previews on the page
window.onload = function () {
    placePrevs(51);
};