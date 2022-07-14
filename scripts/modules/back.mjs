import * as path from './path.mjs';
const backDiv = document.getElementById('back'), backBtn = document.createElement('img');

backDiv.addEventListener('click', () => {
        if (window.history.length > 1 && document.referrer.startsWith(window.location.origin)) {
        if (window.location.href.endsWith('?download') && sessionStorage.getItem('prevUrl') === window.location.href.replace('?download', '')) window.history.go(-2)
        if (window.location.href.includes('#')) {
            console.log("⚙️url contained a hash '#', window.location.href = '../' was used rather than window.history.back() to skip all the hashlinks visited.");
            window.location.href = '../';
        }
        else window.history.back();
    }
    else window.location.href = '../../';
});

backBtn.src = path.b + 'back.png';
backBtn.title = 'back (Backspace)';
backDiv.appendChild(backBtn);
console.log('🔙Added back button to page.');