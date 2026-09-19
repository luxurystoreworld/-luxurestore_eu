// ===============================
// LUXURY STORE SCRIPT
// ===============================

// ---------- Mobile Menu ----------

const menu = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

if(menu && nav){

menu.addEventListener("click",function(){

nav.classList.toggle("active");

});

}

// ---------- Back To Top ----------

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",function(){

if(topBtn){

if(window.scrollY>300){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

}

});

function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// ---------- Animation ----------

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.2});

document.querySelectorAll(".box,.product,.brand-grid div").forEach(el=>{

observer.observe(el);

});

// ---------- Language ----------

const language=document.getElementById("language");

function changeLanguage(lang){

if(!translations[lang]) return;

const set=(id,text)=>{

const el=document.getElementById(id);

if(el){

el.textContent=text;

}

};

set("home",translations[lang].home);
set("perfumes",translations[lang].perfumes);
set("aboutLink",translations[lang].about);
set("contactLink",translations[lang].contact);

set("heroTitle",translations[lang].heroTitle);
set("heroText",translations[lang].heroText);

set("shop",translations[lang].shop);
set("price",translations[lang].price);

set("brands",translations[lang].brands);
set("why",translations[lang].why);

set("quality","🌟 "+translations[lang].quality);
set("delivery","🚚 "+translations[lang].delivery);
set("support","💬 "+translations[lang].support);

localStorage.setItem("language",lang);

}

if(language){

const saved=localStorage.getItem("language")||"tj";

language.value=saved;

changeLanguage(saved);

language.addEventListener("change",function(){

changeLanguage(this.value);

});

}
