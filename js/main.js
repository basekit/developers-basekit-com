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
document.querySelector(".nav-toggle").addEventListener("click", function() {
    this.classList.toggle("active");
});

$('.nav-toggle').on('click', function(e) {
    $('nav').toggleClass("active"); //you can list several class names 
    e.preventDefault();
});
