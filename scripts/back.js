const
    back = document.getElementById('back'),
    // dev
    //path = '/',
    path = '/acnh/',
    a = document.createElement('a'),
    img = document.createElement('img')
;

a.onclick = function back() {
	if (window.history.length > 1 && document.referrer.startsWith(window.location.origin)){
            if (window.location.href.endsWith('?download') && sessionStorage.getItem('prevUrl') === window.location.href.replace('?download', '')) window.history.go(-2);
            else window.history.back();
        }
	else window.location.href = "../../";
};

img.src = `${path}assets/back.png`;
a.appendChild(img);
back.appendChild(a);