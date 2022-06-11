const
    audctrls = document.getElementById('audctrls'),
    showBtn = document.createElement('button'),
    hideBtn = document.createElement('button')
;

audctrls.class = 'flex';

showBtn.id = 'audctrlBtn_show';
showBtn.class = 'flex';
showBtn.style.display = 'block'
showBtn.innerHTML = 'Show Audio Controls';

hideBtn.id = 'audctrlBtn_hide';
hideBtn.class = 'flex';
hideBtn.style.display = 'none';
hideBtn.innerHTML = 'Hide Audio Controls';

audctrls.appendChild(showBtn);
audctrls.appendChild(hideBtn);

console.log('Added audio control buttons to page.');

showBtn.onclick = function() {
    document.getElementById('music').style.display = 'block';
    document.getElementById('audctrlBtn_show').style.display = 'none';
    document.getElementById('audctrlBtn_hide').style.display = 'block';
    console.log('Audio controls are now visible.');
};

hideBtn.onclick = function() {
    document.getElementById('music').style.display = 'none';
    document.getElementById('audctrlBtn_show').style.display = 'block';
    document.getElementById('audctrlBtn_hide').style.display = 'none';
    console.log('Audio controls are now hidden.');
};