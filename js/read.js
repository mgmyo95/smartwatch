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
});

//javascript area


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


//swiper js 
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

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