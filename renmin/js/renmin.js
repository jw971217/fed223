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
        touchRatio: 0,//드래그 금지
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

// text click and copy
function copy(that){
    var inp =document.createElement('input');
    document.body.appendChild(inp)
    inp.value =that.textContent
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
    alert("Copied")
    }

// date
$(document).ready(function(){
    var now = new Date();
    let datee = ".datee"

    var year=now.getFullYear();//연도
    $(datee).eq(0).text(year+"."); 

    var month=now.getMonth()+1;//월
    $(datee).eq(1).text(month+".");

    var date=now.getDate();//일
    $(datee).eq(2).text(date);
  });

// device window size alert
  $(window).resize(function (){
    // width값을 가져오기
    var width_size = window.outerWidth;
    
    // 1001 이하인지 if문으로 확인
    if (width_size <= 1001) {
        alert('현재 브라우저 크기가 너무 작습니다. 자동으로 모바일 화면으로 넘어갑니다.');
        $(location).attr("href", "https://jw971217.github.io/fed223/renmin/renmin_mobile.html");
    }
  });