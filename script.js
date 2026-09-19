// ===============================
// LUXURY STORE SCRIPT
// ===============================

// ---------- MOBILE MENU ----------

const menu = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

if (menu && nav) {

menu.addEventListener("click", () => {

nav.classList.toggle("active");

});

}

// ---------- BACK TO TOP ----------

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if (topBtn) {

if (window.scrollY > 300) {

topBtn.style.display = "flex";

} else {

topBtn.style.display = "none";

}

}

});

function topFunction() {

window.scrollTo({

top: 0,

behavior: "smooth"

});

}

// ---------- SCROLL ANIMATION ----------

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

}, {

threshold: 0.2

});

document.querySelectorAll(".box,.product,.brand-grid div").forEach(el => {

observer.observe(el);

});
// ===============================
// LANGUAGE SYSTEM
// ===============================

const language = document.getElementById("language");

function set(id, text) {

const el = document.getElementById(id);

if (el) {

el.textContent = text;

}

}

function changeLanguage(lang) {

if (!translations[lang]) return;

// Navigation

set("home", translations[lang].home);
set("perfumes", translations[lang].perfumes);
set("aboutLink", translations[lang].about);
set("contactLink", translations[lang].contact);

// Home page

set("heroTitle", translations[lang].heroTitle);
set("heroText", translations[lang].heroText);

set("shop", translations[lang].shop);
set("price", translations[lang].price);

set("brands", translations[lang].brands);

set("why", translations[lang].why);

set("quality", "🌟 " + translations[lang].quality);
set("qualityText", translations[lang].qualityText);

set("delivery", "🚚 " + translations[lang].delivery);
set("deliveryText", translations[lang].deliveryText);

set("support", "💬 " + translations[lang].support);
set("supportText", translations[lang].supportText);

// Products page

set("productsTitle", translations[lang].productsTitle);
set("productsText", translations[lang].productsText);

set("p1", translations[lang].p1);
set("p2", translations[lang].p2);
set("p3", translations[lang].p3);
set("p4", translations[lang].p4);
set("p5", translations[lang].p5);
set("p6", translations[lang].p6);

// Footer

set("footerText", translations[lang].footerText);
set("instagramLabel", translations[lang].instagramLabel);
set("emailLabel", translations[lang].emailLabel);
set("copyright", translations[lang].copyright);

// All "Buy" buttons

document.querySelectorAll("[id^='buy']").forEach(button => {

button.textContent = translations[lang].buy;

});

localStorage.setItem("language", lang);

}
// ===============================
// START LANGUAGE
// ===============================

if (language) {

const savedLanguage = localStorage.getItem("language") || "tj";

language.value = savedLanguage;

changeLanguage(savedLanguage);

language.addEventListener("change", function () {

changeLanguage(this.value);

});

}

// ===============================
// END
// ===============================
