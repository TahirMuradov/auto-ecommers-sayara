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
  