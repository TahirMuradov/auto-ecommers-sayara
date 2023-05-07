$("#header .cart-text").click(function () {
    $("header .cart-box").stop().slideToggle();
})

$("#header .burger-bar").click(function () {
    $("#header .cart-box").hide();
    $("#header .side-menu").stop().slideDown();
    $(".overlay-body").show();
})

$("#header .fa-xmark").click(function () {
    $("#header .side-menu").hide();
    $(".overlay-body").hide();
})

$(".overlay-body").click(function() {
    $("#header .side-menu").hide();
    $(".overlay-body").hide();
});

$("#header .category-menu").click(function () {
    $("header .menu-box").toggle();
})

let loading = document.querySelector(".loading");
let up = document.querySelector(".up");
window.addEventListener("load",function(){
    loading.classList.add("loaded");
    document.querySelector("body").style = "overflow: auto;"
})

window.addEventListener("scroll",function(){
    if(window.pageYOffset>400) up.classList.add("active");
    else up.classList.remove("active");
})

up.addEventListener("click",function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

let home5=document.querySelector(".home5-boxes")



let product=document.querySelector("#product-1 .like")


product.addEventListener("click",()=>{
    product.classList.toggle("active")
})

const description =document.querySelector('.description')
const information =document.querySelector('.information')
const reviews=document.querySelector('.reviews')
const des_content=document.querySelector('.descrip')
const info_content=document.querySelector('.information-content');
const reviews_content=document.querySelector('.review')
description.addEventListener("click",()=>{
    description.classList.add("li-active");
    reviews.classList.remove("li-active");
    information.classList.remove("li-active");

    des_content.style.display="block"
    info_content.style.display="none"
   reviews_content.style.display="none"


})
reviews.addEventListener("click",()=>{
    reviews.classList.add("li-active");
    description.classList.remove("li-active");
    information.classList.remove("li-active");

    des_content.style.display="none"
    info_content.style.display="none"
   reviews_content.style.display="block"


})
information.addEventListener("click",()=>{
    reviews.classList.remove("li-active");
    description.classList.remove("li-active");
    information.classList.add("li-active");

    des_content.style.display="none"
    info_content.style.display="block"
   reviews_content.style.display="none"


})