$(()=>{
    $(document).ready(function() {
        $('#fullpage').fullpage({
            //options here
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            autoScrolling:true,
            scrollHorizontally: true
        });
    });

    var menuButton = document.querySelector('.menu-button');
    var openMenu = function () {
        swiper.slidePrev();
    };
    var swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        initialSlide: 1,
        resistanceRatio: 0,
        slideToClickedSlide: true,
        on: {
            slideChangeTransitionStart: function () {
                var slider = this;
      if (slider.activeIndex === 0) {
          menuButton.classList.add('cross');
          // required because of slideToClickedSlide
          menuButton.removeEventListener('click', openMenu, true);
        } else {
            menuButton.classList.remove('cross');
        }
    },
    slideChangeTransitionEnd: function () {
        var slider = this;
        if (slider.activeIndex === 1) {
            menuButton.addEventListener('click', openMenu, true);
        }
        },
    },
    });

});


$('.fp-tableCell').removeClass('vertical-align: middle;');