const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const close = document.querySelector(".close");
const mobLeft = document.querySelector(".left .arrow-left");
const mobRight = document.querySelector(".left .arrow-right");
const desLeft = document.querySelector(".right .arrow-left");
const desRight = document.querySelector(".right .arrow-right");

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-visible');
})
close.addEventListener('click', ()=>{
    nav.classList.toggle('nav-visible');
})



function mobile() {
    const element = document.querySelector(".first .left");
    const background = getComputedStyle(element).backgroundImage;
    if(background == 'url("https://burningorc.github.io/room/images/mobile-image-hero-1.jpg")'){
        return 1
    }
    if(background == 'url("https://burningorc.github.io/room/images/mobile-image-hero-2.jpg")'){
        return 2
    }
    if(background == 'url("https://burningorc.github.io/room/images/mobile-image-hero-3.jpg")'){
        return 3
    }
}

mobRight.addEventListener('click', () =>{
    if(mobile() == 1){
        document.querySelector(".first .left").style.backgroundImage = "url(https://burningorc.github.io/room/images/mobile-image-hero-2.jpg)";
    }
    else if(mobile() == 2){
        document.querySelector(".first .left").style.backgroundImage = "url(https://burningorc.github.io/room/images/mobile-image-hero-3.jpg)";  
    }
    else if(mobile() == 3){
        document.querySelector(".first .left").style.backgroundImage = "url(https://burningorc.github.io/room/images/mobile-image-hero-1.jpg)";  
    }
})
mobLeft.addEventListener('click', () => {
    if(mobile() == 1){
        document.querySelector(".first .left").style.backgroundImage = "url(https://burningorc.github.io/room/images/mobile-image-hero-3.jpg)";
    }
    else if(mobile() == 2){
        document.querySelector(".first .left").style.backgroundImage = "url(https://burningorc.github.io/room/images/mobile-image-hero-1.jpg)";  
    }
    else if(mobile() == 3){
        document.querySelector(".first .left").style.backgroundImage = "url(https://burningorc.github.io/room/images/mobile-image-hero-2.jpg)";  
    }
}) 
function desktop() {
    const element = document.querySelector(".first .left");
    const background = getComputedStyle(element).backgroundImage; 
    if(background == 'url("https://burningorc.github.io/room/images/desktop-image-hero-1.jpg")'){
        return 1
    }
    else if(background == 'url("https://burningorc.github.io/room/images/desktop-image-hero-2.jpg")'){
        return 2
    }
    else if(background == 'url("https://burningorc.github.io/room/images/desktop-image-hero-3.jpg")'){
        return 3
    }
}
desLeft.addEventListener('click', () => {
    if(desktop() == 1){
        document.querySelector(".first .left").style.backgroundImage = "url(https://burningorc.github.io/room/images/desktop-image-hero-3.jpg)";
    }
    else if(desktop() == 2){
        document.querySelector(".first .left").style.backgroundImage = "url(https://burningorc.github.io/room/images/desktop-image-hero-1.jpg)";  
    }
    else if(desktop() == 3){
        document.querySelector(".first .left").style.backgroundImage = "url(https://burningorc.github.io/room/images/desktop-image-hero-2.jpg)";  
    }
}) 
desRight.addEventListener('click', () => {
    if(desktop() == 1){
        document.querySelector(".first .left").style.backgroundImage = "url(https://burningorc.github.io/room/images/desktop-image-hero-2.jpg)";
    }
    else if(desktop() == 2){
        document.querySelector(".first .left").style.backgroundImage = "url(https://burningorc.github.io/room/images/desktop-image-hero-3.jpg)";  
    }
    else if(desktop() == 3){
        document.querySelector(".first .left").style.backgroundImage = "url(https://burningorc.github.io/room/images/desktop-image-hero-1.jpg)";  
    }
})
