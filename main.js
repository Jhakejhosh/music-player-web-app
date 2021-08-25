window.addEventListener('load', () => {
    const textContent = document.querySelector(".text-content");
    const textContentPosition = textContent.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if(textContentPosition < screenPosition) {
        textContent.classList.add("text-fade");
    }else {
        textContent.classList.remove("text-fade");
    };

    const cardContent = document.querySelector(".music-image-card");
    const cardContentPosition = cardContent.getBoundingClientRect().top;

    if(cardContentPosition < screenPosition) {
        cardContent.classList.add("card-fade");
    }else {
        cardContent.classList.remove("card-fade");
    };
    const rateContent = document.querySelector(".rate-music");
    const rateContentPosition = rateContent.getBoundingClientRect().top;

    if(rateContentPosition < screenPosition) {
        rateContent.classList.add("rate-fade");
    }else {
        rateContent.classList.remove("rate-fade");
    };
    contentSlider();
});

/* image slide */
let rightbtn = document.querySelector(".fa-chevron-right");
let leftbtn = document.querySelector(".fa-chevron-left");
const contentImage = document.querySelector("#content-image")
const imgslide1 =document.querySelector("#imgslide1");
const imgslide2 =document.querySelector("#imgslide2");
const imgslide3 =document.querySelector("#imgslide3");
const imgslide4 =document.querySelector("#imgslide4");
const imgslide5 =document.querySelector("#imgslide5");
const musicImages = document.querySelector(".music-images-select");

let width = 0;

rightbtn.onclick = function() {

    if ( width > "-25") {
        width = width - 25;
        musicImages.style.left = width + "%"
    }
}
leftbtn.onclick = function() {

    if ( width < 0) {
        width = width + 25;
        musicImages.style.left = width + "%"
    }
}


/* clicked to display*/
let imgclicked = [
    "images/jamaica.jpg",
    "images/feelingvibes.jpg",
    "images/reading.jpg",
    "images/cool music.jpg",
    "images/club bear.jpg"
];

imgslide1.onclick = ()=> {
   contentImage.src = imgclicked[0];
}
imgslide2.onclick = ()=> {
   contentImage.src = imgclicked[1];
}
imgslide3.onclick = ()=> {
   contentImage.src = imgclicked[2];
}
imgslide4.onclick = ()=> {
   contentImage.src = imgclicked[3];
}
imgslide5.onclick = ()=> {
   contentImage.src = imgclicked[4];
}

let imgIndex = 0;
function contentSlider() {
    if(imgIndex < imgclicked.length - 1) {
        imgIndex++;
        contentImage.src = imgclicked[imgIndex];
    }
    else {
        imgIndex = 0;
    }
}
setTimeout("contentSlider()", 30);



