class Navbar {
  constructor(target, menu) {
    if (target instanceof HTMLElement && menu instanceof HTMLElement) {
      this.btn = target;
      this.menu = menu;

      this.btn.addEventListener("click", () => {
        this.open();
      });
    } else {
      throw new TypeError(
        "The Target and Menu arguments must be a DOM element."
      );
    }
  }
  open() {
    if (this.isopen) {
      this.menu.classList.add("nav-hidden");
    } else {
      this.menu.classList.remove("nav-hidden");
    }

    this.isopen = !this.isopen;
  }
}
var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");
var para1 = document.querySelector(".para1");
var para2 = document.querySelector(".para2");
var ro1 = document.querySelector(".ro1");
var ro2 = document.querySelector(".ro2");
var nav_part = document.querySelector(".nav-part");
var float_container = document.querySelector(".float-container");

fetch('./file.json')
 .then((response)=>{return response.json()})
 .then((result)=>{result.map((item)=>{
    box1.innerHTML+='<div class="box_info"><img src='+item.box1img+'  class="box1_img"><span class="box1_info">'+item.box1heading+'</span></div>'
    box2.innerHTML+='<div class="box_info"><img src='+item.box2img+' class="box2_img"><span class="box2_info">'+item.box2heading+'</span></div>'
    box3.innerHTML+='<div class="box_info"><img src='+item.box3img+' class="box3_img"><span class="box3_info">'+item.box3heading+'</span></div>'
    para1.innerHTML+='<div class="ele"><h2>'+item.para1heading+'</h2></div><p class="para1_info">'+item.para1para+'</p>'
    para2.innerHTML+='<div class="hea"><h2>'+item.para2heading+'</h2></div> <h5 class="p2">'+item.para2para+'</h5>'
    ro1.innerHTML+='<div class="f1"><i class="lni lni-checkmark-circle"></i>  <span class="point">'+item.f1heading+'</span></div><div class="s1"><i class="lni lni-checkmark-circle"></i>  <span class="point">'+item.s1heading+'</span></div>'
    ro2.innerHTML+='<div class="f2"><i class="lni lni-checkmark-circle"></i>  <span class="point">'+item.f2heading+'</span></div><div class=" s2"><i class="lni lni-checkmark-circle"></i>  <span class="point">'+item.s2heading+'</span></div>'
    nav_part.innerHTML+='<div class="heading"><div class="heading-text">'+item.headingText+'</div></div><p class="works">'+item.works+'<span class="main"> <a class="link" onclick="one()"><span class="navigate active">'+item.navigate+'</span></a ><a class="link"  onclick="two()"><span class="other-navigate">'+item.otherNavigate+'</span></a></span></p>'
    float_container.innerHTML+='<div class="card1 float-child"><div class="card-data"><p class="card-desc">'+item.cardDesc+'</p><p class="card-desc-sec">'+item.cardDescSec+'</p><span class="group"><span class="keyword">'+item.keyword+'</span><span class="keyword">'+item.keyword1+'</span><span class="keyword">'+item.keyword2+'</span></span></div><div class="image"><img class="card-img"src="'+item.src+'"alt=""/></div></div>'
  })})

document.getElementById("card2").style.display = "none";

var x = document.getElementById("card1");
var y = document.getElementById("card2");
function two() {
  x.style.display = "none";
  y.style.display = "block";
}
function one() {
  y.style.display = "none";
  x.style.display = "block";
}








/*Satyam Part*/


//Function for skill percentage
var stop=0;
window.addEventListener('scroll', () => {
let scrollable= 3000;
const scrolled=window.scrollY;

if(Math.ceil(scrolled)>=scrollable && stop==0)
{
    stop=1;
    let skills=document.getElementsByClassName('inner-circle');
    for(let i=0;i<skills.length; i++){
    skills[i].style.animation="anim"+(i+1)+ " 1s linear forwards";
    }
    
    
    let number= document.getElementsByClassName("percentage");
    const percentage=[95, 90 , 70, 50];
    let counter=0;
    setInterval(() => {
        if(counter == 95 ){
            clearInterval();
        }
       
    else{
        counter += 1;
        for (let i = 0; i < number.length; i++) {
            if(counter<=percentage[i])
            {
            number[i].innerHTML = counter + "%";
            }
          }
        }
    }, 12);
    
}
});




//Function for forward card move
let cards= document.getElementsByClassName("cards");
const slideWidth=cards[0].getBoundingClientRect().width;
let slides=document.querySelector('.card-container');
let forward=document.querySelector('.forward');
let backward=document.querySelector('.backward');

for(let i = 0; i < cards.length; i++)
{
    cards[i].style.left= slideWidth* i + 'px';
};

//change button color
const imageChange= (sibling) => {
    let forwardArrow=document.querySelector('#forward-arrow');
    let backwardArrow=document.querySelector('#backward-arrow');
    let nextSlide=sibling.nextElementSibling;
    let prevSlide=sibling.previousElementSibling
    if(nextSlide==null)
    {
        forwardArrow.src='images/Gray-forward arrow.svg'
    }
    else
    {
        forwardArrow.src='images/Purple-forward arrow.svg'
    }
    if(prevSlide!=null)
    {
        backwardArrow.src='images/Purple-back arrow.svg'
    }
    else{
        backwardArrow.src='images/Gray-back arrow.svg'
    }
}

//inactive buttons for corner slides
const buttonInactive=(sibling)=>{
    let nextSlide=sibling.nextElementSibling;;
    let prevSlide=sibling.previousElementSibling
if(nextSlide== null)
{
    forward.disabled=true;
    forward.style.cursor='default';
}
else{
    forward.disabled=false;
    forward.style.cursor='pointer';
}
if(prevSlide==null)
{
    backward.disabled=true;
    backward.style.cursor='default';
}
else{
    backward.disabled=false;
    backward.style.cursor='pointer';
}
}

const moveSlide = (currentSlide,siblingSlide) => {
       
        let amountToMove=siblingSlide.style.left;
        slides.style.transform='translateX(-' + amountToMove + ')';
        currentSlide.classList.remove('current');
        siblingSlide.classList.add('current');
        imageChange(siblingSlide);
    }
    let counter=0;
    let scrollbar= document.querySelector('.nav-scroll');
   /* let widthToMove=scrollbar.style.width.value;*/

    console.log("txt-",scrollbar);
const movebarforward = () =>{
    
    counter+=1;
    let amountToMove=116*counter;
    scrollbar.style.transform='translateX(+' + amountToMove +'px' + ')';
}
const movebarbackward = () =>{
    counter-=1;
    let amountToMove=116*counter;
    
    scrollbar.style.transform='translateX(+' + amountToMove +'px' + ')';
}
//move card forward
forward.addEventListener('click',()=>{
    let current = document.querySelector('.current');
    let nextSibling = current.nextElementSibling;
    moveSlide(current,nextSibling);
    buttonInactive(nextSibling);
    movebarforward();
});

//Move card backwards
backward.addEventListener('click',()=>{
        let current = document.querySelector('.current');
        let prevSibling = current.previousElementSibling;
        moveSlide(current,prevSibling);
        buttonInactive(prevSibling);
        movebarbackward();
});

