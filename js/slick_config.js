$('#slick-1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    autoplaySpeed: 5000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
    ]
  });