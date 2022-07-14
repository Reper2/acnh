var
    cr = document.getElementById('copyright'),
    cr_content = document.createElement('h3'),
    license = document.createElement('a');

license.target = '_blank';
license.href = 'https://github.com/Reper2/acnh/blob/master/LICENSE';
license.title = 'View License (Alt+R)';

cr_content.innerHTML = '(c) 2022 Reper2';

license.appendChild(cr_content);
cr.appendChild(license);

console.log('⚖️Added copyright information to page.');