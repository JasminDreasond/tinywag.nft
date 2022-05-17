$(() => {

    $('#video').hover(function() {
        $('.bg').css('opacity', 0);
    }, function() {
        $('.bg').css('opacity', '');
    });

});