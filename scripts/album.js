function downloadAlbum() {
    var confirmed = confirm('WARNING!\nYou are about to download a very large zip file containing an album of all of Reper2\'s ACNH screenshots and videos.');
    if (confirmed) {
        window.open('https://github.com/Reper2/acnh-album/archive/refs/heads/master.zip');
        console.log('Downloaded album.');
    }
}