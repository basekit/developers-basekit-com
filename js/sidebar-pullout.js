$(document).ready(function(){
  
    // Sidebar Pullout Menu

    // Menu icon states, opening main nav
    $('#menu-icon').click(function(){
        $('body').toggleClass('open');
    });

    // Clicking on overlay closes menu
    $('#menu-overlay').click(function(){
        $('body').removeClass('open');
    });
  
});