const
    audctrls = document.getElementById('audctrls'),
    showBtn = document.createElement('button'),
    hideBtn = document.createElement('button'),
    showBtn_tooltip = document.createElement('span'),
    hideBtn_tooltip = document.createElement('span')
    music = document.getElementById('music');

audctrls.className = 'tooltip';

showBtn.id = 'audctrlBtn_show';
showBtn.style.display = 'block';
showBtn.innerHTML = 'Show Audio Controls';

showBtn_tooltip.className = 'tooltiptext';
showBtn_tooltip.id = 'show-tooltip';
showBtn_tooltip.innerHTML = 'Show audio controls (Alt+S)';
showBtn.appendChild(showBtn_tooltip);

hideBtn.id = 'audctrlBtn_hide';
hideBtn.style.display = 'none';
hideBtn.innerHTML = 'Hide Audio Controls';

hideBtn_tooltip.className = 'tooltiptext';
hideBtn_tooltip.id = 'hide-tooltip';
hideBtn_tooltip.innerHTML = 'Hide audio controls (Alt+H)';
hideBtn.appendChild(hideBtn_tooltip);

audctrls.appendChild(showBtn);
audctrls.appendChild(hideBtn);

showBtn.addEventListener('click', () => {
    music.style.display = 'block';
    showBtn.style.display = 'none';
    hideBtn.style.display = 'block';
    console.log('🧙🏼Audio controls are now visible.');
});

hideBtn.addEventListener('click', () => {
    music.style.display = 'none';
    showBtn.style.display = 'block';
    hideBtn.style.display = 'none';
    console.log('👻Audio controls are now hidden.');
});

console.log('🎛️Added audio control buttons to page.');