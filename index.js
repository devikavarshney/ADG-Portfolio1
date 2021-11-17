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
var BigName = document.querySelector(".Big-Name");
var job = document.querySelector(".line1");


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
    BigName.innerHTML+='<h1>'+item.BigName1+'</h1><h1>'+item.BigName2+'</h1>'
    job.innerHTML+='<span>'+item.work+'</span>'
    nav_part.innerHTML+='<div class="heading"><div class="heading-text">'+item.heading-text+'</div></div><p class="works">'+item.works+' <span class="main"><a href="" class="link"><span class="navigate active">'+item.navigate+'</span></a ><a href="" class="link"><span class="other-navigate ">'+item.other-navigate+'</span></a></span></p>'
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

// code for Download CV

//  const myFunction=() => {
    // location.replace("your cv link");
//}
