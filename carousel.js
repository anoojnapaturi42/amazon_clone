const heroImages = document.querySelectorAll(".hero-images img"); 
let currentImageIndex = 0; 

function changeHeroImage() {
    heroImages[currentImageIndex].classList.remove("active"); 
    currentImageIndex = (currentImageIndex+1)%heroImages.length; 
    heroImages[currentImageIndex].classList.add("active"); 
} 

setInterval(changeHeroImage, 4000); 