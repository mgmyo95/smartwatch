//jquery area 
$(document).ready(function(){

 $(window).scroll(function(){
    let getscrolltop = $(this).scrollTop();
    console.log(getscrolltop);
    if(getscrolltop >= 200){
        $(".navbar").addClass('collapse');
    }else{
        $(".navbar").removeClass('collapse');
    }

    //uptop 
    if(getscrolltop >= 400){
      $(".uptop").addClass('display');
     }else{
      $(".uptop").removeClass('display');
     }
     
 });

 //lightslider js
$(".lightslider").lightSlider({
    item : 3,
    auto: true,
    loop: true,
    slideMove:1,
    speed:500,
    easing:"ease",
    controls:false,
    pager : false,
    slideMargin:40,
    autoWidth:true

}); 

});


//javascript area
//start navmenu open
let getmenu = document.querySelector('.menu');
let getopenmenu = document.querySelector('.open-nav-menu');
let mediasize = 1045;

getopenmenu.onclick = function(){
    getmenu.classList.toggle('active'); 
};

window.addEventListener('resize',function(){
    if(this.innerWidth > mediasize){
        getmenu.classList.remove('active');
    };
});

//end navmenu open

//start awesome 3D animation 
let smartimg = document.querySelector('.smart-img img');
smartimg.addEventListener('mousemove',e=>{
  // console.log(e.pageX,e.pageY);
  let xaxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yaxis = (window.innerHeight / 2 - e.pageY) / 10;

  smartimg.style.transform = `rotateY(${yaxis}deg) rotateX(${xaxis}deg)`;
});

//mouser enter 
smartimg.addEventListener('mouseenter',e=>{
  smartimg.style.transition = "none";
})
//mouse leave 
smartimg.addEventListener('mouserleave',e=>{
  smartimg.style.transition = "all 0.3s ease-out";
});

//end awesome 3D animation

//explore section js 
let getexpicn = document.querySelector('.explore-icon');
let getexpmodal = document.querySelector('.explore-modal');
let getexptime = document.querySelector('.explore-modal .explore-time');

getexpicn.addEventListener('click',function(){
  getexpmodal.style.display = "block";
});

getexptime.addEventListener('click',function(){
  getexpmodal.style.display = "none";
});

//start contact 
// let getemail = document.querySelector(".email-form #email");
// let getemailbtn = document.querySelector('.email-btn');
// if(getemail.value != null){
//   getemailbtn.style.transform = "translate(0,-50%)";
// }else{
//   getemailbtn.style.transform = "translate(300px,-50%)";
// }
//end contact

//footer year 
let getyr = document.querySelector("#year");
let getfullyear = new Date().getUTCFullYear();
getyr.innerHTML = `${getfullyear}`;




//gsap scrolltrigger area
  gsap.registerPlugin(ScrollTrigger);
  let gettxts = document.querySelectorAll('.text');
    gettxts.forEach(gettxt=>{
      let getsplits = gettxt.innerText.split('');
    //   console.log(getsplits);
      gettxt.innerHTML = "";

      getsplits.forEach((getsplit,idx)=>{
        // console.log(getsplit,idx);
        let em = document.createElement('em');
        em.classList.add('textem');
        em.textContent = `${getsplit}`;
        
        gettxt.appendChild(em);
        
      })
    });
    
    gsap.to('.textem',{
        y : 0,
        opacity: 1,
        duration : 0.8,
        repeat : -1,
        yoyo : true,
        stagger : {
          each : 0.1,
          ease : "bounce_in"
        }
    });

    //smart_img banner 
    gsap.to(".smart-box",{
      scale : 1,
      duration : 2,
      ease : "elastic",
      scrub : 1,
      scrollTrigger : {
        trigger : ".smart-box",
        start : "top 70%",
        end : "top 80%"
      }
    });

    //about content 
    gsap.to(".about-content",{
      y : 0,
      scale: 1,
      duration : 2, 
      ease : "elastic",
      scrub : 1,
      scrollTrigger : {
        trigger : ".about-content",
        start : "top 80%",
        end : "top 90%"
      }
    });

     //explain section 
     gsap.to(".explain-box",{
      rotateX : 0,
      duration : 2, 
      ease : "elastic",
      scrub : 1,
      scrollTrigger : {
        trigger : ".about-content",
        start : "top 25%",
        end : "top 40%"
      }
    });

