
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

$( ".business").click(function() {
    $( ".business .pricing-benefits" ).toggleClass( "open" );
});


// Pricing Selector

var prices = {
    "gbp": [0, 7, 12, 4.60],
    "usd": [0, 10, 19, 7],
    "eur": [0, 8, 14, 6]
}

$('.currency-selector select').change(function () {
    switch(this.value) {
    case 'usd':
        $('.free-package').text('$' + prices.usd[0]);
        $('.basic-package').text('$' + prices.usd[1]);
        $('.business-package').text('$' + prices.usd[2]);
        $('.reseller-package').text('$' + prices.usd[3]);
        break;
    case 'gbp':
        $('.free-package').text('£' + prices.gbp[0]);
        $('.basic-package').text('£' + prices.gbp[1]);
        $('.business-package').text('£' + prices.gbp[2]);
        $('.reseller-package').text('£' + prices.gbp[3]);
        break;
    case 'eur':
        $('.free-package').text('€' + prices.eur[0]);
        $('.basic-package').text('€' + prices.eur[1]);
        $('.business-package').text('€' + prices.eur[2]);
        $('.reseller-package').text('€' + prices.eur[3]);
        break;
	}
});


