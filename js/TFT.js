$('article').mouseenter(function(){
    $(this).stop().animate({width:'45%'},100);
    $(this).find('video').get(0).play();
});
$('article').mouseleave(function(){
    $(this).stop().animate({width:'15%'},100);
    $(this).find('video').get(0).pause();
});
$('.change_region').click(function(){
    $('.region').stop().fadeIn(600);
        setTimeout(function(){
            $('.region').stop().fadeOut(600);
        }, 1300);
});