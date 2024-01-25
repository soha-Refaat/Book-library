
searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick =() => {
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.logen-form-cont');
document.querySelector('#logen-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}
document.querySelector('#close-logn-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}


window.onscroll = () =>{
  searchForm.classList.remove('active');
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
window.onload= () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
var swiper = new Swiper(".books-slider", {
    
   loop:true,
   ccentersdSlides: true,
   autoplay: {
    delay: 9500,
    disableOnInteraction: false,
   },
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
       
      },
    },
  });

  var swiper = new Swiper(".feature-slider", {
    soaceBetween:10,
    loop:true,
    ccentersdSlides: true,
    autoplay: {
     delay: 9500,
     disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
     breakpoints: {
       0: {
         slidesPerView: 1,
        
       },
       450: {
        slidesPerView: 2,
        
      },
       768: {
         slidesPerView: 3,
         
       },
       1024: {
         slidesPerView: 4,
        
       },
     },
   });

   var swiper = new Swiper(".arrivals-slider", {
    soaceBetween:10,
      
   loop:true,
   ccentersdSlides: true,
   autoplay: {
    delay: 9500,
    disableOnInteraction: false,
   },
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
       
      },
    },
  });

  var swiper = new Swiper(".reviews-slider", {
    soaceBetween:10,
      
   loop:true,
   ccentersdSlides: true,
   autoplay: {
    delay: 9500,
    disableOnInteraction: false,
   },
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
       
      },
    },
  });

   var swiper = new Swiper(".blogs-slider", {
    soaceBetween:10,
    loop:true,
    ccentersdSlides: true,
    autoplay: {
     delay: 9500,
     disableOnInteraction: false,
    },
   
     breakpoints: {
       0: {
         slidesPerView: 1,
        
       },
      
       768: {
         slidesPerView: 2,
         
       },
       1024: {
         slidesPerView: 3,
        
       },
     },
   });