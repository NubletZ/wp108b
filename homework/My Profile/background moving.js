$(window).scroll(function() {
    var x = $(this).scrollTop();
    $('#main').css('background-position', '100% ' + parseInt(-x / 1) + 'px' + ', 0% ' + parseInt(-x / 2) + 'px, center top');
});