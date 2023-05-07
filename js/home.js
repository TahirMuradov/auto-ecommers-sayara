
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
  window.scrollTo({ top:0, behavior: 'smooth' });
})


// header end 
const api="https://raw.githubusercontent.com/sourcecodebd/Car-Services-API/main/services.json"




let home_sec4=document.querySelector("#home-sec4 .row")



fetch(`${api}`).then(res=>res.json()).then(json=>{
  console.log(json);
  let conter=0;


for (const i of json) {
conter++
if(conter==9){
  break
}
home_sec4.innerHTML+=`
<div class="kapsam">
<img src="${i.img}" alt="" class="img-fluid img">
<h4 class="title">${i.name}</h4>

</div>
`
}


})

let home5=document.querySelector(".home5-boxes")
console.log(home5);





$('.home5-boxes').slick({
 
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.home6-boxes').slick({
 
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// services script start 
console.log($('#service-3 .slider'));
$('#service-3 .slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

