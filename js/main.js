$(document).ready(function(){

    $(window).scroll(function(){

      var pageY = $(window).scrollTop();

      if(pageY > 200){

          $("header").css({
              position: 'fixed',
              zIndex: 20,
              backgroundColor: '#fdfdfdc9',
              height: 110,
              borderBottomLeftRadius: 10
          });

      }else if(pageY < 200){

          $("header").css({
              position: 'relative'
          });

      };
    }); //header fixed end

    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 10,
      slidesPerView: 8,
      freeMode: true,
      watchSlidesProgress: true,
    }); //sec_1_pc swiper end

    var swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 30,
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: true,
      loop: true,
      navigation: {
        nextEl: ".sec_1_btn_r",
        prevEl: ".sec_1_btn_l",
      },
      thumbs: {
        swiper: swiper,
      },
    }); //sec_1_pc pg nav swiper end

    $(".nav_m").each(function(num){
        $(this).attr("data-num", num)
    });

    $('.nav_m').click(function(){

        var clicked = $(this).attr("data-num")
        console.log(clicked)

        $(".slide_1_mob").stop().animate({
            left: -350 * clicked
        });

        $(".nav_m").removeClass("active");  // 전체에서 active 제거
        $(this).addClass("active");    
        
    }); //sec_1 mob end

    var swiper4 = new Swiper(".sec_2_slide", {
      slidesPerView: 2.2,
      spaceBetween: 30,
      freeMode: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".sec_2_btn_r",
        prevEl: ".sec_2_btn_l",
      },

       breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.08,
            spaceBetween: 5,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2.2,
            spaceBetween: 40
        }
      }
    }); // sec_2, sec_6 swiper end


    

}); //end

