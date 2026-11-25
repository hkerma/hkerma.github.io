
$(function () {
  'use strict'
  
  // // MENU
  // $('.navbar .nav-link').on('click',function(){
  //     $(".navbar-collapse").collapse('hide');
  // });
  
  $(window).on('scroll', function() {     
    if ($(window).width() < 1200) {                            
      /*----------------------------------------------------*/
      /*  Navigtion Menu Scroll
      /*----------------------------------------------------*/    
      var b = $(window).scrollTop();
      
      if( b < 72 ){
          $(".navbar").addClass("scroll");
      } else {
          $(".navbar").removeClass("scroll");
      }
    }
  });

  // SMOOTHSCROLL
  $(function() {
    $('.navbar .nav-link').on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });   
    
});


function showMoreNews() {
  const hiddenNews = document.querySelectorAll(".news-item:not(.visible)");
  let count = 0;
  hiddenNews.forEach(item => {
      if (count < 10) {
          item.classList.add("visible");
          count++;
      }
  });
  if (hiddenNews.length <= 10) {
      document.querySelector(".toggle-button").style.display = "none";
  }
}