
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


// Pricing Selector

var prices = {
    "gbp": [0, 7, 12],
    "usd": [0, 10, 19],
    "eur": [0, 8, 14]
}

$('.currency-selector select').change(function () {
    switch(this.value) {
    case 'usd':
        $('.free-package').text('$' + prices.usd[0]);
        $('.basic-package').text('$' + prices.usd[1]);
        $('.business-package').text('$' + prices.usd[2]);
        break;
    case 'gbp':
        $('.free-package').text('£' + prices.gbp[0]);
        $('.basic-package').text('£' + prices.gbp[1]);
        $('.business-package').text('£' + prices.gbp[2]);
        break;
    case 'eur':
        $('.free-package').text('€' + prices.eur[0]);
        $('.basic-package').text('€' + prices.eur[1]);
        $('.business-package').text('€' + prices.eur[2]);
        break;
	}
});


