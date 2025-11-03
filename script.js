const submitButton = document.getElementById('submitButton');

const popUp = document.getElementById('imagePopUp');
const popUpImage = document.getElementById('popUpImage');

const images = ['images/qr.png','images/qr2.png', 'images/qr3.png'];


function getRandomImage() {
    const randomNum = Math.floor(Math.random() * images.length);
    return images[randomNum];
}

function submitButtonClick() {
    const image = getRandomImage();
    popUpImage.src = image;
    popUp.style.display = 'flex';
}

window.onclick = function(event) {
    if(event.target === popUp) {
        popUp.style.display = 'none';
    }
}

submitButton.onclick = function() {
    const url = document.getElementById('url').value;
    const regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+([\/?].*)?$/;
        if(!regex.test(url)) {
            alert('Invalid URL!');
            return;
            }
            submitButtonClick();
}
