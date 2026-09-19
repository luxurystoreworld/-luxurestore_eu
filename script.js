// ===============================
// LUXURY STORE
// ===============================

// ---------- Mobile Menu ----------

const menu=document.getElementById("menu-toggle");
const nav=document.getElementById("nav");

if(menu){

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}

// ---------- Back To Top ----------

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

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
// ===============================
// LANGUAGE SYSTEM
// ===============================

const language=document.getElementById("language");

function set(id,text){

const el=document.getElementById(id);

if(el){

el.textContent=text;

}

}

function changeLanguage(lang){

if(!translations[lang]) return;

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
set("qualityText",translations[lang].qualityText);

set("delivery","🚚 "+translations[lang].delivery);
set("deliveryText",translations[lang].deliveryText);

set("support","💬 "+translations[lang].support);
set("supportText",translations[lang].supportText);

set("footerText",translations[lang].footerText);

set("instagramLabel",translations[lang].instagramLabel);

set("emailLabel",translations[lang].emailLabel);

set("copyright",translations[lang].copyright);

localStorage.setItem("language",lang);

}

if(language){

const savedLanguage=localStorage.getItem("language")||"tj";

language.value=savedLanguage;

changeLanguage(savedLanguage);

language.addEventListener("change",function(){

changeLanguage(this.value);

});

}
