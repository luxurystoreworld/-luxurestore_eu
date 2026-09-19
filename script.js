window.addEventListener("scroll",function(){

const elements=document.querySelectorAll(".box,.product,.brand-grid div");

elements.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<window.innerHeight-100){
el.classList.add("show");
}

});

});

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>300||document.documentElement.scrollTop>300){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
const menu=document.getElementById("menu-toggle");

const nav=document.getElementById("nav");

menu.addEventListener("click",function(){

nav.classList.toggle("active");

});
/* =========================
   LANGUAGE SWITCHER
========================= */

const language = document.getElementById("language");

function changeLanguage(lang){

document.getElementById("home").textContent =
translations[lang].home;

document.getElementById("perfumes").textContent =
translations[lang].perfumes;

document.getElementById("about").textContent =
translations[lang].about;

document.getElementById("contact").textContent =
translations[lang].contact;

document.getElementById("heroTitle").textContent =
translations[lang].heroTitle;

document.getElementById("heroText").textContent =
translations[lang].heroText;

document.getElementById("shop").textContent =
translations[lang].shop;

document.getElementById("price").textContent =
translations[lang].price;

document.getElementById("brands").textContent =
translations[lang].brands;

document.getElementById("why").textContent =
translations[lang].why;

localStorage.setItem("language",lang);

}

const savedLanguage = localStorage.getItem("language");

if(savedLanguage){

language.value = savedLanguage;

changeLanguage(savedLanguage);

}

language.addEventListener("change",function(){

changeLanguage(this.value);

});
