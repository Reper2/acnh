let
    footer = document.getElementById('footer'),
    hashLink = document.createElement('a'),
    content = document.createElement('h5');
hashLink.href = '#footer';
content.innerHTML = 'DA: DA-9419-3603-8052 <br> Creator ID: MA-4116-4314-7050 <br> HHN ID: RA-7852-3149-7307';
hashLink.appendChild(content);
footer.appendChild(hashLink);
console.log('Footer sucessfully added to page.');