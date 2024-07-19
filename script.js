$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
      }else{
        $('.navbar').removeClass("sticky");
      }
    
      if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
      }else{
        $('.scroll-up-btn').removeClass("show");
      }
    });
  
    // slide-up script
    $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
      $('html').css("scrollBehavior", "auto");
    });
  
    $('.navbar .menu li a').click(function(){
      $('html').css("scrollBehavior", "smooth");
    });
  
    $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
    });
  
    var typed = new Typed(".typing", {
      strings: ["Quality Coffee from its BirthPlace"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    var typed = new Typed(".typing-2", {
      strings: ["Coffee Beans Exporter"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0:{
          items: 1,
          nav: false
        },
        600:{
          items: 2,
          nav: false
        },
        1000:{
          items: 3,
          nav: false
        }
      }
    });
  
    // Slide Animation
    $('.home').addClass("slideshow");
});

function preloadImages() {
  const images = [
    "images/banner.jpg",
    "images/slide1.jpg",
    "images/slide2.jpg",
    "images/slide3.jpg",
    "images/slide4.jpg",
    "images/slide5.jpg",
    "images/slide6.jpg",
    "images/slide7.jpg",
    "images/slide8.jpg",
    "images/slide9.jpg",
    "images/slide10.jpg",
    "images/slide11.jpg",
    "images/slide12.jpg",
  ];

  images.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
}

// Call the preloadImages function
preloadImages();
