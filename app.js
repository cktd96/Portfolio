var type  = new Typed(".name" ,   {
    strings:["Madhurendra","an Engineer.","WebDeveloper.","Programmer."],
    typeSpeed:100,
    backSpeed:80,
    loop:true
})

var btn1 = document.querySelector('#btn')
var audio = new Audio("switch-21.wav");
btn1.onclick = function(){
    document.body.classList.toggle('dark-theme');
    audio.play();
    if(document.body.classList.contains('dark-theme')){
        document.querySelector('.Img').src = "https://img1.pnghut.com/t/11/25/10/gPdDT9NYLR/black-and-white-monochrome-photography-brand.jpg";
    }else{
        document.querySelector('.Img').src = "https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/moon_dark_mode_night-2-512.png";
    }
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


  var happy = document.getElementById("Happy");
  function chanhgeEmoji() {
      happy.innerHTML = "🙁"
  }
  function chanhgeBackEmoji(){
    happy.innerHTML = "🙂"
  }
