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

submitButton.onclick = async function() {
    const url = document.getElementById('url').value;
//    alert(url);
    try {
        const response = await fetch(url);
        if(response.ok){
            submitButtonClick();
        } else {
            alert('Invalid URL!');
        }
    } catch {
        alert('URL fetch error!');
    }
}
