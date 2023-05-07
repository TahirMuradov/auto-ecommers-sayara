const post1=document.querySelectorAll(".post")[0];
const post2=document.querySelectorAll(".post")[1];
const post3=document.querySelectorAll(".post")[2];
const post4=document.querySelectorAll(".post")[3];
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const b1=document.querySelector(".nav_links .b1");
const b2=document.querySelector(".nav_links .b2");

let click_currency=0
console.log(b1,b2);

b2.addEventListener("click",()=>{
     click_currency++;
    post1.style.display ="block"
    post2.style.display ="none"
    post3.style.display ="none"
    post4.style.display ="none"
    b1.style="background-color:#eaeaea;color:#000"
    b2.style="background-color:#e52727;color:#FFf"

})
b1.addEventListener("click",()=>{
    click_currency++;

    post1.style.display ="none"
    post2.style.display ="block"
    post3.style.display ="block"
    post4.style.display ="block"
    prev.style.display="none"
    b2.style="background-color:#eaeaea;color:#000"
    b1.style="background-color:#e52727;color:#FFf"

})
next.addEventListener("click",()=>{
    click_currency++;
    
if (     click_currency==1 ) {
    
        post1.style.display ="block"
        post2.style.display ="none"
        post3.style.display ="none"
        post4.style.display ="none"
        b1.style="background-color:#eaeaea;color:#000"
        b2.style="background-color:#e52727;color:#FFf"
}
if( click_currency==2){
    post1.style.display ="none"
    post2.style.display ="block"
    post3.style.display ="block"
    post4.style.display ="block"
    b2.style="background-color:#eaeaea;color:#000"
    b1.style="background-color:#e52727;color:#FFf"
    click_currency=0
}
})
// blog end
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