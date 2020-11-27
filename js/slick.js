$(document).ready(function () {
  $('.theme_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
  });
});

// $(document).ready(function () {
//   $('.works_slider').slick({
//     infinite: true,
//     slidesToShow: 4,
//       slidesToScroll: 4,
//     dots: false,
//       arrows: true,
//   });
// });

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
        var n = {
          root: o.root,
          scroller: '.scroller',
          bar: '.scroller__bar',
          barOnCls: o.barOnCls,
        };
        baron(n);
        l(), l();
      });
    };
    return l();
  };
})(jQuery);
baron('.scroller');

$(document).ready(function () {
  $(document).wrapFoBaron({
    root: '.scroll-example',
    barOnCls: 'baron',
  });
});
