let toggles = document.getElementsByClassName("toggle");
let contentDiv = document.getElementsByClassName("content");
let icons = document.getElementsByClassName("icon");

for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener("click", () => {
        if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#0084e9";
            icons[i].classList.remove("fa-plus");
            icons[i].classList.add("fa-minus");
        } else {
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#111130";
            icons[i].classList.remove("fa-minus");
            icons[i].classList.add("fa-plus");
        }

        for (let j = 0; j < contentDiv.length; j++) {
            if (j !== i) {
                contentDiv[j].style.height = 0;
                toggles[j].style.color = "#111130";
                icons[j].classList.remove("fa-minus");
                icons[j].classList.add("fa-plus");
            }
   }
});
}
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