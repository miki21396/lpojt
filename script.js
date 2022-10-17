$(function () {
// pet livers
$(window).on('scroll', function () {
    // 要素の画面最上部からの距離を取得
    let pet = $('.fadein1').offset().top;

    // 画面の高さ
    let wh = $(window).height();
   pet= pet + 350;
    // $(window).scrollTop()は現在のスクロール位置
    if (pet <= $(window).scrollTop() + wh) {
        $('.fadein1').removeClass('hide1');
    } else {
        $('.fadein1').addClass('hide1');
    }

})

// about1

$(window).on('scroll', function () {
        
    let about = $('.fadein2').offset().top;

    let wh = $(window).height();
    about=about + 350;
    if (about <= $(window).scrollTop() + wh) {
        $('.fadein2').removeClass('hide2');
    } else {
        $('.fadein2').addClass('hide2');
    }

})

// about2
$(window).on('scroll', function () {
        
    let about2 = $('.fadein3').offset().top;

    let wh = $(window).height();
    about2= about2 + 350;
    if (about2 <= $(window).scrollTop() + wh) {
        $('.fadein3').removeClass('hide3');
    } else {
        $('.fadein3').addClass('hide3');
    }

})

// sponser
$(window).on('scroll', function () {
        
    let sponser = $('.fadein4').offset().top;

    let wh = $(window).height();
    sponser= sponser + 350;
    if (sponser <= $(window).scrollTop() + wh) {
        $('.fadein4').removeClass('hide4');
    } else {
        $('.fadein4').addClass('hide4');
    }

})


// Customer voice

$(window).on('scroll', function () {
       
    let voice = $('.fadein5').offset().top;

    let wh = $(window).height();
    voice = voice + 400;
  
    if (voice <= $(window).scrollTop() + wh) {
        $('.fadein5').removeClass('hide5');
    } else {
        $('.fadein5').addClass('hide5');
    }

})

// contact
$(window).on('scroll', function () {
       
    let con = $('.fadein6').offset().top;

    let wh = $(window).height();
    con = con+ 400;
  
    if (con <= $(window).scrollTop() + wh) {
        $('.fadein6').removeClass('hide6');
    } else {
        $('.fadein6').addClass('hide6');
    }

})





// Service
    $(window).on('scroll', function () {
        
        let service = $('.fadein').offset().top;

        let wh = $(window).height();
        if (service <= $(window).scrollTop() + wh) {
            $('.fadein').removeClass('hide');
        } else {
            $('.fadein').addClass('hide');
        }

    })


//   company
    $(window).on('scroll', function () {
        
        let company = $('.fadein7').offset().top;

        let wh = $(window).height();
        if (company <= $(window).scrollTop() + wh) {
            $('.fadein7').removeClass('hide7');
        } else {
            $('.fadein7').addClass('hide7');
        }

    })


})