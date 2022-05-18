$(document).ready(function(){
    const num_images = 47;

    var randomNumber = Math.floor(Math.random() * num_images);
    var link = "https://reper2.github.io/acnh/bg/" + String(randomNumber).padStart(3, '0') + ".jpg";
    var bgImg = 'url(' + link + ')';

    $('body').css({
        'background-image': bgImg,
        'background-position': 'center center',
        'background-repeat': 'no-repeat no-repeat',
        'background-size': 'cover',
    });

    console.log(`🔀Page background has been randomised to ${bgImg} from refresh!`);
});
