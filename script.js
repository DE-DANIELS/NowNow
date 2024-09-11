// MOBLILE NAV-VIEW

const openMobileEls = document.querySelector(".fa-bars");
const closeMobileEls = document.querySelector(".fa-xmark");
const myMobileLinks = document.querySelector(".N-mobile");

openMobileEls.addEventListener("click", function(){
    myMobileLinks.style.display = "block";
    closeMobileEls.style.display = "block";
    openMobileEls.style.display = "none";
})

closeMobileEls.addEventListener("click", function(){
    myMobileLinks.style.display = "none";
    closeMobileEls.style.display = "none";
    openMobileEls.style.display = "block";
})