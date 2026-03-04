/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|ipad|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  $("body").addClass("is-mobile");
}
if(jQuery.browser.mobile) {
  $("body").addClass("is-mobile");
}
if( /iPad|iPhone/i.test(navigator.userAgent) ) {
  $('body').addClass('is-ios');
}
if (/android/i.test(navigator.userAgent) ) {
  $('body').addClass('is-android');
}

function particles() {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 20,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#38d0e1"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.8,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
}

function menuToggle() {

  $('.menu-toggle').click(function(){
    $(".c-hamburger").toggleClass('active');
    $(".menu-panel").toggleClass('is-toggle');
    $("body").toggleClass('scroll--hidden');

    if($(".menu-panel").hasClass('is-toggle')){
      $(".site-header").addClass('is-view');
    } else {
      $(".site-header").removeClass('is-view');
    }
    
  });

  $('.main-menu a').click(function(){
    $(".c-hamburger").removeClass('active');
    $(".menu-panel").removeClass('is-toggle');
    $("body").removeClass('scroll--hidden');
    $(".site-header").removeClass('is-view');
  });

}

function scroll() {

  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 70) {
      $(".site-header").addClass("sticky");
      $(".to-top").addClass('is-view');
    } else {
      $(".site-header").removeClass("sticky");
      $(".to-top").removeClass('is-view');
    }

  });

  $(window).height(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 70) {
      $(".site-header").addClass("sticky");
      $(".to-top").addClass('is-view');
    } else {
      $(".site-header").removeClass("sticky");
      $(".to-top").removeClass('is-view');
    }

  });

  ;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el) {
       function visPx(){
         var elH = $(el).outerHeight(),
             H = $(win).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H)));  
       }
       visPx();
       $(win).on("resize scroll", visPx);
     });
  };

  }(jQuery, window));

  // $('.site-footer').inViewport(function(px){
  //   if(px >0){
  //     $('#to-top').addClass('change-bottom');
  //   }
  //   else{
  //     $('#to-top').removeClass('change-bottom');
  //   }
  // });

}


(function($){
  var _hash=location.hash || null,
    _validateLocHash=function(val){
      try{ var $val=$(val); }catch(error){ return false; } //avoid js errors on invalid selectors
      return $(val).length && $("a[href*='"+val+"']").length;
    };
  $(document).ready(function(){
    if(_hash){
      if(_validateLocHash(_hash)){
        var href=window.location.href.replace(/#.*$/,"#");
        $(window).scrollTop(0); //stop jump to hash straight away
        if(window.history && window.history.replaceState){
          window.history.replaceState("","",href);
        }else{
          window.location.href=href;
        }
      }
    }
  });
  $(window).on("load",function(){
    $(".main-menu a,a[rel='m_PageScroll2id']").mPageScroll2id({
      highlightSelector:".main-menu a"
    });

    $(window).hashchange(function(){
      var loc=window.location,
        to=loc.hash.split("/")[1] || "#top";
        $.mPageScroll2id("scrollTo",to,{
        clicked:$("a[href='"+loc+"'],a[href='"+loc.hash+"'],a[href='"+loc.hash+" target='_blank']")
      });
    });
    if(_hash){
      if(_validateLocHash(_hash)){
        $(window).scrollTop(0); //jump/start from the top
        setTimeout(function(){
          $.mPageScroll2id("scrollTo",_hash); //scroll to location hash on page load
          if(window.history && window.history.replaceState){
            window.history.replaceState("","",_hash);
          }else{
            window.location.hash=_hash;
          }
        },0); //optional delay
      }
    }

  });
})(jQuery);

function popup() {

  $('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    showCloseBtn: false,
    fixedContentPos: true,
    modal: false,
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      open: function () {
        console.log(swiper);
      },
      afterClose: function () {
        console.log(swiper);
      },
      beforeOpen: function() {
         this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
  });

  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

}

function swiper() {

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    observer:true,
    observeParents:true,
    effect: 'fade',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });
  
}


function inview() {
  
 
  $('.item').on('inview', function(event, isInView, visiblePartX, visiblePartY) {

    if (isInView) {
      $(this).delay(50).addClass("animated fadeInUp");
    }

  });


}



$(document).ready(function(){

  menuToggle();
  scroll();
  inview();
  popup();
  swiper();
  // particles();

  $("img[data-original]").show().lazyload({
    threshold : 1000,
    // effect : "fadeIn",
    skip_invisible : true,
    event : "sporty"
  });

  var $window = $(window),
      $html = $('html');

  function resize() {

    if ($window.width() > 768) {
      $(".c-hamburger").removeClass('active');
      $(".menu-panel").removeClass('is-toggle');
      $("body").removeClass('scroll--hidden');
      $(".site-header").removeClass('is-view');
    }

  }

  $window.resize(resize).trigger('resize');

  $('.header-language__trigger').click(function(event){
    $(".header-language").toggleClass('is-toggle');
    event.stopPropagation();
  });

  $("body").click(function(event) {
    // event.preventDefault();

    if($(".header-language").hasClass('is-toggle')){
      $(".header-language").removeClass('is-toggle');
    };
      
  });




});


$(window).on('load', function() {
  $("#loader").fadeOut(500);

  $('.kv-content').delay(0).queue(function() {$(this).addClass("animated fadeIn");});
  $('.kv-image').delay(350).queue(function() {$(this).addClass("animated fadeInUp");});

});


$(window).on("load", function() {
  
  // https://appelsiini.net/projects/lazyload/v1/
  
  var timeout = setTimeout(function() {
    $("img[data-original]").trigger("sporty")
  }, 1500);

});


// https://stackoverflow.com/questions/3664381/force-page-scroll-position-to-top-at-page-refresh-in-html
// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }