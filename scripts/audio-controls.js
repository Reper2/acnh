const
    audctrls = document.getElementById('audctrls'),
    showBtn = document.createElement('button'),
    hideBtn = document.createElement('button'),
    showBtn_tooltip = document.createElement('span'),
    hideBtn_tooltip = document.createElement('span');

audctrls.className = 'tooltip';

showBtn.id = 'audctrlBtn_show';
showBtn.style.display = 'block';
showBtn.innerHTML = 'Show Audio Controls';

showBtn_tooltip.className = 'tooltiptext';
showBtn_tooltip.id = 'show-tooltip';
showBtn_tooltip.innerHTML = 'Show audio controls';
showBtn.appendChild(showBtn_tooltip);

hideBtn.id = 'audctrlBtn_hide';
hideBtn.style.display = 'none';
hideBtn.innerHTML = 'Hide Audio Controls';

hideBtn_tooltip.className = 'tooltiptext';
hideBtn_tooltip.id = 'hide-tooltip';
hideBtn_tooltip.innerHTML = 'Hide audio controls';
hideBtn.appendChild(hideBtn_tooltip);

audctrls.appendChild(showBtn);
audctrls.appendChild(hideBtn);

console.log('🎛️Added audio control buttons to page.');

showBtn.onclick = function() {
    document.getElementById('music').style.display = 'block';
    document.getElementById('audctrlBtn_show').style.display = 'none';
    document.getElementById('audctrlBtn_hide').style.display = 'block';
    console.log('🧙🏼Audio controls are now visible.');
};

hideBtn.onclick = function() {
    document.getElementById('music').style.display = 'none';
    document.getElementById('audctrlBtn_show').style.display = 'block';
    document.getElementById('audctrlBtn_hide').style.display = 'none';
    console.log('💨Audio controls are now hidden.');
};