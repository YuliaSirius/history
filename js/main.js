$(document).ready(function () {
  $('.theme_slider').not('.slick-initialized').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: true,
  });
});

// попап с видео theme
let theme = document.querySelector('.theme');
let themeTrumbs = theme.querySelectorAll('.thumb');
let themeLargeImage = theme.querySelector('.largeImage');
for (let i = 0; i < themeTrumbs.length; i++) {
    themeTrumbs[i].addEventListener('click', function (e) {
      themeLargeImage.setAttribute('src', this.getAttribute('data-src'));
    
  });
}

// попап с видео works
let works = document.querySelector('.works');
let worksTrumbs = works.querySelectorAll('.thumb');
let worksLargeImage = works.querySelector('.largeImage');
for (let i = 0; i < worksTrumbs.length; i++) {
  worksTrumbs[i].addEventListener('click', function (e) {
    worksLargeImage.setAttribute('src', this.getAttribute('data-src'));
  });
}

$(document).ready(function () {
  $('.works_slider').not('.slick-initialized').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
  });
});

$('.mouse-parallax').on('mousemove', (e) => {
  const x = e.pageX / $(window).width();
  const y = e.pageY / $(window).height();

  $('.createfilms_mouse-parallax_bg').css(
    'transform',
    'translate(' + x * 60 + 'px, ' + y * 60 + 'px)'
  );
});

!(function (r) {
  r.fn.wrapFoBaron = function (o) {
    o = r.extend({ root: '.scroller_wrap', barOnCls: 'baron' }, o);
    var l = function () {
      r(document).ready(function () {
        function l() {
          r(o.root).each(function () {
            r(this).find('.scroller__content').height() <= r(this).height()
              ? (r(this).find('.scroller__bar-wrapper').hide(),
                r(this).find('.scroller').addClass('.with-scroll'))
              : r(this).find('.scroller').removeClass('.with-scroll');
          });
        }
        r(o.root).each(function () {
          r(this).wrapInner('<div class="scroller__content"></div>'),
            r(this).wrapInner('<div class="scroller"></div>'),
            r(this).append(
              '<div class="scroller__bar-wrapper"><div class="scroller__bar"></div></div>'
            );
        });
        let n = {
          root: o.root,
          scroller: '.scroller',
          bar: '.scroller__bar',
          barOnCls: o.barOnCls,
          direction: 'v',
        };
        baron(n);
        l(), l();
      });
    };
    return l();
  };
})(jQuery);

!(function (r) {
  r.fn.wrapFoBaron1 = function (o) {
    o = r.extend({ root: '.scroller_wrap', barOnCls: 'baron' }, o);
    var l = function () {
      r(document).ready(function () {
        function l() {
          r(o.root).each(function () {
            r(this).find('.scroller__content').height() <= r(this).height()
              ? (r(this).find('.scroller__bar-wrapper').hide(),
                r(this).find('.scroller').addClass('.with-scroll'))
              : r(this).find('.scroller').removeClass('.with-scroll');
          });
        }
        r(o.root).each(function () {
          r(this).wrapInner('<div class="scroller__content"></div>'),
            r(this).wrapInner('<div class="scroller"></div>'),
            r(this).append(
              '<div class="scroller__bar-wrapper"><div class="scroller__bar"></div></div>'
            );
        });
        let n = {
          root: o.root,
          scroller: '.scroller',
          bar: '.scroller__bar',
          barOnCls: o.barOnCls,
          direction: 'h',
        };
        baron(n);

        l(), l();
      });
    };
    return l();
  };
})(jQuery);

$(document).ready(function () {
  $(document).wrapFoBaron({
    root: '.scroll',
    barOnCls: 'baron',
  });
});

$(document).ready(function () {
  $(document).wrapFoBaron({
    root: '.scroll_audio',
    barOnCls: 'baron',
  });
});

$(document).ready(function () {
  $(document).wrapFoBaron1({
    root: '.scroll_video',
    barOnCls: 'baron',
  });
});

let navButtonOpen = false;

let navButton = document.querySelector('.header_nav_button');
let navigation = document.querySelector('.header_nav');
navButton.addEventListener('click', function (e) {
  navigation.classList.remove('navOpen');
  navigation.classList.remove('navClose');

  if (!navButtonOpen) {
    navigation.classList.add('navOpen');
    navButtonOpen = true;
  } else {
    navigation.classList.add('navClose');
    navigation.classList.remove('navOpen');

    navButtonOpen = false;
  }
});
// })();
