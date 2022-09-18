// swiper
$(()=>{

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
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