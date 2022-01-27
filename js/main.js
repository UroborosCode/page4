$(function () {
    $('.congress__foot').slick({
        dots: false,
        arrows: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  dots: true,
                  arrows: false
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  dots: true,
                  arrows: false
                }
              },
            ],
    });
    $('.news__box-slider-media').slick({
          mobileFirst: true,
          arrows: false,
          dots: true,
          adaptiveHeight: true,
           responsive: [
            {
              breakpoint: 480,
              settings: "unslick"
            }
        ]
    });
    $('.partners__wrapp-slider-media').slick({
          mobileFirst: true,
          arrows: false,
          dots: true,
          adaptiveHeight: true,
           responsive: [
            {
              breakpoint: 480,
              settings: "unslick"
            }
        ]
    })
})
