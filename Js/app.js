const burger = document.getElementById('burger');
const navlinks = document.getElementById('nav-links');


document.getElementById("burger").addEventListener("click", myfunction);

function myfunction(){
navlinks.classList.toggle('show');
burger.classList.toggle('show');
}



