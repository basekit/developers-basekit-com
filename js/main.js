
// Mobile Navigation Toggle

$( ".nav-toggle").click(function() {
    $( ".header, .nav-toggle, nav" ).toggleClass( "active" );
});


// Pricing Table Toggle

$( ".free").click(function() {
    $( ".free .pricing-benefits" ).toggleClass( "open" );
});

$( ".basic").click(function() {
    $( ".basic .pricing-benefits" ).toggleClass( "open" );
});

$( ".highlighted").click(function() {
    $( ".highlighted .pricing-benefits" ).toggleClass( "open" );
});


