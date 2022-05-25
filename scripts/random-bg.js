$(document).ready(function () {
    const num_images = 370;

    var randomNumber = Math.floor(Math.random() * num_images);
    var link = "https://reper2.github.io/acnh/assets/backgrounds/" + String(randomNumber).padStart(3, '0') + ".jpg";
    var bgImg = 'url(' + link + ')';

    $('body').css({
        'background-image': bgImg,
        'background-position': 'center center',
        'background-repeat': 'no-repeat no-repeat',
        'background-size': 'cover',
    });

    console.log(`🔀Page background has been randomised to background #${randomNumber} from refresh!`);
    console.log('random number is ' + randomNumber);
    console.log('background image url is ' + link);
});