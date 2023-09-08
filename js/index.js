const a=window.location.pathname;
switch(a) {
  case "/home.html":
  HomeJs();
    break;
  case "/about.html":
   AboutJS();
    break;
    case "/blog.html":
    BlogJs();
      break; 
      case "/blog-detail.html":
      Blog_DetailsJs();
      break;
      case "/cart.html":
        console.log("blog sehifesindeyik");
        break;
        case "/contact.html":
        ContactJs();
          break;
          case "/fag.html":
          FagJs();
            break;
            case "/home.html":
              HomeJs();
              break;
              case "/order.html":
              
                break;
                case "/product-detail.html":
                 ProductDetailJs()
                  break;
                  case "/services.html":
                   ServicesJs();
                    break;
                    case "/shop.html":
                      ShopJs();
                      break;
  default:
    // code block
}
function AboutJS() {
    console.log('About JS');  
    let shotccik = 0
const img1 = document.querySelectorAll(".img-boxs img")[0]
const img2 = document.querySelectorAll(".img-boxs img")[1]
const img3 = document.querySelectorAll(".img-boxs img")[2]
const right = document.querySelector(".next")
const left = document.querySelector(".prev")
const nameceo = document.querySelector(".info h5")

right.addEventListener("click", () => {
console.log(shotccik);
shotccik++
  
  if (shotccik == 1) {
    
    img2.style.left = "0px";
    img1.style.left = "100%";
    img3.style.left = "100%";
    nameceo.textContent = "John Alex"
  }
  if (shotccik == 2) {
    img2.style.left = "100%";
    img1.style.left = "100%";
    img3.style.left = "0px";
    nameceo.textContent = "John Doe"
  }
  if (shotccik == 3) {
    img2.style.left = "100%";
    img1.style.left = "0px";
    img3.style.left = "100%";
    nameceo.textContent = "Jessica Moore"
    
    shotccik = 0
 
  }
})
left.addEventListener("click", () => {
shotccik--;
console.log(shotccik);

if (shotccik <= 0) {
  
  img2.style.left = "100%";  
  img1.style.left = "0"; 
  img3.style.left = "100%";
  nameceo.textContent = "Jessica Moore"
  shotccik=3;
}
if (shotccik == 1) {
  img2.style.left = "0";  
  img1.style.left = "100%"; 
  img3.style.left = "100%";
  nameceo.textContent = "John Alex"
}
if (shotccik ==2) {
  img2.style.left = "100%";  
  img1.style.left = "100%"; 
  img3.style.left = "0";
  nameceo.textContent = "John Doe"
  shotccik=0;
}
console.log($('.#test .slider'));
})



const count1 = document.querySelector(".count1")
const count2 = document.querySelector(".count2")
const count3 = document.querySelector(".count3")
const count4 = document.querySelector(".count4")



window.onscroll = function () {
if ( count1.innerHTML == `120` && count2.innerHTML ==`2036` && count3.innerHTML ==`3012`&& count4.innerHTML ==`234` ) {
  clearInterval(time1,time2,time3,time4);
}
  if (window.scrollY > 50 && window.scrollY<90) {

    let a = 0
    let b = 0
    let c = 0
    let d = 0

    let time1 = setInterval(() => {

      a++;
      count1.innerHTML = `${a}`
      if (a === 120) {
        clearInterval(time1)

      }
    }, 10);
    let time2 = setInterval(() => {

      b+=2;
      count2.innerHTML = `${b}`
      if (b=== 2036) {
        clearInterval(time2)

      }
    }, 1);
    let time3 = setInterval(() => {

      c+=2;
      count3.innerHTML = `${c}`
      if (c=== 3012) {
        clearInterval(time3)

      }
    }, 1);
    let time4 = setInterval(() => {

      d++;
      count4.innerHTML = `${d}`
      if (d=== 234) {
        clearInterval(time4)

      }
    }, 10);
  }

}

// about script end 
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
$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
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
}
function HomeJs() {
    
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
  
  
    
}
function BlogJs() {
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
}
function Blog_DetailsJs() {
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
}
function ContactJs() {
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
}
function FagJs() {
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
}
function OrderJs() {
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
}
function ProductDetailJs() {
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
}
function ServicesJs() {
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
}
function ShopJs() {
    const rangeBar = document.querySelector('.range-bar');
const rangeLine = rangeBar.querySelector('.range-line');
const leftPoint = rangeLine.querySelector('.left-point');
const rightPoint = rangeLine.querySelector('.right-point');
let rightPosition = rangeBar.clientWidth;
const minPrice = document.querySelector(".price-bar .price .min");
const maxPrice = document.querySelector(".price-bar .price .max");
let isDraggingLeft = false;
let isDraggingRight = false;

leftPoint.addEventListener('mousedown', startDragLeft);
rightPoint.addEventListener('mousedown', startDragRight);
document.documentElement.addEventListener('mousemove', dragPoint);
document.documentElement.addEventListener('mouseup', stopDrag);

function startDragLeft(event) {
    isDraggingLeft = true;
    document.documentElement.classList.add("userSelectDisable");
}

function startDragRight(event) {
    isDraggingRight = true;
    document.documentElement.classList.add("userSelectDisable");
}
function dragPoint(event) {
    if (isDraggingLeft) {
        if (event.clientX >= 0 && event.clientX < rightPosition-23) {
            rangeLine.style.left = event.clientX + 'px';
            let percent = Math.floor((event.clientX/rangeBar.clientWidth)*100);
            minPrice.innerHTML = '$' + (Math.floor(percent*20)+360);
        }
    }
    if (isDraggingRight) {
        if (event.clientX > rangeLine.offsetLeft+28 && event.clientX <= rangeBar.clientWidth) {
            rangeLine.style.right = (rangeBar.clientWidth - event.clientX) + 'px';
            rightPosition = event.clientX;
            let percent = Math.floor((event.clientX/rangeBar.clientWidth)*100);
            maxPrice.innerHTML = '$' + (Math.floor(percent*20)+360);
        }
    }
}

function stopDrag(event) {
    document.documentElement.classList.remove("userSelectDisable");
    isDraggingLeft = false;
    isDraggingRight = false;
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
    window.scrollTo({ top:0, behavior: 'smooth' });
  })
  
}