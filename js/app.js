$(document).ready(function() {
   	const stickyNavTop = $('.nav').offset().top;
   	const stickyNav = function(){
	    const scrollTop = $(window).scrollTop();
	    if (scrollTop > stickyNavTop) { 
	    	$('.nav').removeClass('no-nav');
	        $('.nav').addClass('sticky');
	    } else {
	        $('.nav').removeClass('sticky');
	        $('.nav').addClass('no-nav');
	    }
	};
	stickyNav();
	$(window).scroll(function() {
		stickyNav();
	});
});

// shophd
$('#4-1').on('click', function(){
	$('#proj-4').attr('src', './public/imgs/shop-1.png'); 
	$('#4-1').removeClass('selected');
	$('#4-2').removeClass('selected');
	$('#4-3').removeClass('selected');
	$('#4-4').removeClass('selected');
    $(this).addClass('selected');
});
$('#4-2').on('click', function(){
	$('#proj-4').attr('src', 'public/imgs/shop-2.png');
	$('#4-1').removeClass('selected');
	$('#4-2').removeClass('selected');
	$('#4-3').removeClass('selected');
	$('#4-4').removeClass('selected');
    $(this).addClass('selected');
});
$('#4-3').on('click', function(){
	$('#proj-4').attr('src', 'public/imgs/shop-3.png');
	$('#4-1').removeClass('selected');
	$('#4-2').removeClass('selected');
	$('#4-3').removeClass('selected');
	$('#4-4').removeClass('selected');
    $(this).addClass('selected');
});
$('#4-4').on('click', function(){
	$('#proj-4').attr('src', 'public/imgs/shop-4.png');
	$('#4-1').removeClass('selected');
	$('#4-2').removeClass('selected');
	$('#4-3').removeClass('selected');
	$('#4-4').removeClass('selected');
    $(this).addClass('selected');
});

// Shoestring
$('#3-1').on('click', function(){
	$('#proj-3').attr('src', './public/imgs/shoestring-1.png'); 
	$('#3-1').removeClass('selected');
	$('#3-2').removeClass('selected');
	$('#3-3').removeClass('selected');
    $(this).addClass('selected');
});
$('#3-2').on('click', function(){
	$('#proj-3').attr('src', 'public/imgs/shoestring-2.png');
	$('#3-1').removeClass('selected');
	$('#3-2').removeClass('selected');
	$('#3-3').removeClass('selected');
    $(this).addClass('selected');
});
$('#3-3').on('click', function(){
	$('#proj-3').attr('src', 'public/imgs/shoestring-3.png');
	$('#3-1').removeClass('selected');
	$('#3-2').removeClass('selected');
	$('#3-3').removeClass('selected');
    $(this).addClass('selected');
});

// AMC
$('#2-1').on('click', function(){
	$('#proj-2').attr('src', './public/imgs/amc-1.png');
	$('#2-1').removeClass('selected');
	$('#2-2').removeClass('selected');
	$('#2-3').removeClass('selected');
    $(this).addClass('selected'); 
});
$('#2-2').on('click', function(){
	$('#proj-2').attr('src', 'public/imgs/amc-2.png');
	$('#2-1').removeClass('selected');
	$('#2-2').removeClass('selected');
	$('#2-3').removeClass('selected');
    $(this).addClass('selected');
});
$('#2-3').on('click', function(){
	$('#proj-2').attr('src', 'public/imgs/amc-3.png');
	$('#2-1').removeClass('selected');
	$('#2-2').removeClass('selected');
	$('#2-3').removeClass('selected');
    $(this).addClass('selected');
});

// Highway
$('#1-1').on('click', function(){
	$('#proj-1').attr('src', './public/imgs/highway-1.png');
	$('#1-1').removeClass('selected');
	$('#1-2').removeClass('selected');
	$('#1-3').removeClass('selected');
    $(this).addClass('selected');
});
$('#1-2').on('click', function(){
	$('#proj-1').attr('src', 'public/imgs/highway-2.png');
	$('#1-1').removeClass('selected');
	$('#1-2').removeClass('selected');
	$('#1-3').removeClass('selected');
    $(this).addClass('selected');
});
$('#1-3').on('click', function(){
	$('#proj-1').attr('src', 'public/imgs/highway-3.png');
	$('#1-1').removeClass('selected');
	$('#1-2').removeClass('selected');
	$('#1-3').removeClass('selected');
    $(this).addClass('selected');
});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top-35
    }, 500);
})