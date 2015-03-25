// Initialize Tech Tab Slider

var techswiper = new Swiper('.tech-swiper', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 30,
    autoplay: 5000,
    autoplayDisableOnInteraction: true,
    effect: 'fade',
     paginationBulletRender: function (index, className) {
        return '<span class="' + className + '">' + '<i class="arrow"></i>' + '</span>';
    }
});



// Initialize Theme Slider

var themeswiper = new Swiper('.showcase-swiper', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    effect: 'fade'
});


// Mobile Navigation Toggle

$( ".nav-toggle").click(function() {
    $( ".header, .nav-toggle, nav" ).toggleClass( "active" );
});
