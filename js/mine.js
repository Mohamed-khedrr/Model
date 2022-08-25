var allImages = Array.from(document.querySelectorAll('img'));
var parnentLayer = document.querySelector('.parentLayer');
var close = document.getElementById('close');
var childLayer = document.querySelector('.childLayer');
var currentIndex;
var next = document.getElementById('next');
var prev = document.getElementById('prev');


for (var i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener('click', showLayer)
}

// =================show parent=================
function showLayer(eInfo) {
    // 1- display over alyer
    parnentLayer.classList.replace('d-none', 'd-flex');
    imgSrc = eInfo.target.src;

    // 2- choose the background
    childLayer.style.backgroundImage = `url(${imgSrc})`

    // 3 mkan el img
    currentIndex = allImages.indexOf(eInfo.target)
    console.log(currentIndex)
}

// =================close parent=================

close.addEventListener('click', closeParent)
function closeParent() {
    parnentLayer.classList.replace('d-flex', 'd-none')

}

// =================next img=================
next.addEventListener('click', nextImage);
function nextImage() {
    currentIndex++;
    if (currentIndex >= allImages.length) {
        currentIndex = 0;
    }
    imgSrc = allImages[currentIndex].src;
    // console.log(imgSrc)
    childLayer.style.backgroundImage = `url(${imgSrc})`
}

// =================prev img=================
prev.addEventListener('click', prevImg);

function prevImg() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = allImages.length - 1;
    }
    imgSrc = allImages[currentIndex].src;
    // console.log(imgSrc)

    childLayer.style.backgroundImage = `url(${imgSrc})`
}

// =================key =================

document.addEventListener('keydown', action)

function action(eInfo) {

    if (eInfo.key == "ArrowRight") {
        nextImage()
    }
    else if (eInfo.key == "ArrowLeft") {
        prevImg();
    }
    else if (eInfo.key == "Escape") {
        closeParent();
    }

}
// =================click out =================

// parnentLayer.addEventListener('click', closeParent)

