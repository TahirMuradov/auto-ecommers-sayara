function callAll(jsfiles) {
    var src = document.createElement("script");
    src.setAttribute("type", "text/javascript");
    src.setAttribute("src", jsfiles);
    document.getElementsByTagName("head")[0].appendChild(src);
  }
  callAll("./js/static.js");
// blog script start
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

// b2.addEventListener("click",()=>{
//      click_currency++;
//     post1.style.display ="block"
//     post2.style.display ="none"
//     post3.style.display ="none"
//     post4.style.display ="none"
//     b1.style="background-color:#eaeaea;color:#000"
//     b2.style="background-color:#e52727;color:#FFf"

// })
// b1.addEventListener("click",()=>{
//     click_currency++;

//     post1.style.display ="none"
//     post2.style.display ="block"
//     post3.style.display ="block"
//     post4.style.display ="block"
//     prev.style.display="none"
//     b2.style="background-color:#eaeaea;color:#000"
//     b1.style="background-color:#e52727;color:#FFf"

// })
// next.addEventListener("click",()=>{
//     click_currency++;
    
// if (     click_currency==1 ) {
    
//         post1.style.display ="block"
//         post2.style.display ="none"
//         post3.style.display ="none"
//         post4.style.display ="none"
//         b1.style="background-color:#eaeaea;color:#000"
//         b2.style="background-color:#e52727;color:#FFf"
// }
// if( click_currency==2){
//     post1.style.display ="none"
//     post2.style.display ="block"
//     post3.style.display ="block"
//     post4.style.display ="block"
//     b2.style="background-color:#eaeaea;color:#000"
//     b1.style="background-color:#e52727;color:#FFf"
//     click_currency=0
// }
// })
// blog end

// about script start 

let shotccik = 0
const img1 = document.querySelectorAll(".img-boxs img")[0]
const img2 = document.querySelectorAll(".img-boxs img")[1]
const img3 = document.querySelectorAll(".img-boxs img")[2]
const right = document.querySelector(".next")
const left = document.querySelector(".prev")
const nameceo = document.querySelector(".info h5")

right.addEventListener("click", () => {

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
}

})



const count1 = document.querySelector(".count1")
const count2 = document.querySelector(".count2")
const count3 = document.querySelector(".count3")
const count4 = document.querySelector(".count4")



window.onscroll = function () {
if ( count1.innerHTML == `120` && count2.innerHTML ==`2036` && count3.innerHTML ==`3012`&& count4.innerHTML ==`234` ) {
  clearInterval(time1,time2,time3,time4);
}
  if (window.scrollY > 50 && window.scrollY<70) {

    let a = 00
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
// home script start 
const api="https://raw.githubusercontent.com/sourcecodebd/Car-Services-API/main/services.json"

// let home_row=document.querySelector("#home-sec4 .row")
// console.log(home_row);
// fetch(`${api}`).then(res=>res.json()).then(json=>{
//     console.log(json);

//     json.map((item)=>{
//     if(item.price>=10000 && item.price<=15000){
//         home_row.innerHTML+=
//         `
//         <div class="box">
//         <div class="img-box">
//             <img src="${item.img}" alt="" class="img-fluid">
//         </div>
//         <div class="content">
//             <h4 class="title">${item.name}</h4>
//             <p class="price">${item.price}</p>
//         </div>
//         </div>
//         `
//     }
//     })
// })



let home_sec4=document.querySelector("#home-sec4 .row")
// let home_sec5=document.querySelector("#home-sec5 .box2")


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
// home script end 
// services script start 
services3=document.querySelector("#services-3")
console.log(services3);
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


