const allButton = document.getElementById("all_button"); 
const closeButton = document.getElementById("close_button"); 
const allMenu = document.getElementById("side_menu"); 
const overlay = document.getElementById("overlay"); 

allButton.addEventListener("click", () => {
    allMenu.classList.add("open"); 
    overlay.style.display = "block"; 
});  
closeButton.addEventListener("click", () => {
    allMenu.classList.remove("open"); 
    overlay.style.display = "none"; 
}); 

overlay.addEventListener("click", () => {
    allMenu.classList.remove("open"); 
    overlay.style.display = "none"; 
});   
