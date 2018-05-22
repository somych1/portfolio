// Shoestring
$('#3-1').on('click', function(){
	$('#proj-3').attr('src', './public/imgs/shoestring-1.png'); 
	$('button').removeClass('selected');
    $(this).addClass('selected');
});
$('#3-2').on('click', function(){
	$('#proj-3').attr('src', 'public/imgs/shoestring-2.png');
	$('button').removeClass('selected');
    $(this).addClass('selected');
});
$('#3-3').on('click', function(){
	$('#proj-3').attr('src', 'public/imgs/shoestring-3.png');
	$('button').removeClass('selected');
    $(this).addClass('selected');
});

$('#2-1').on('click', function(){
	$('#proj-2').attr('src', './public/imgs/amc-1.png');
	$('button').removeClass('selected');
    $(this).addClass('selected'); 
});
$('#2-2').on('click', function(){
	$('#proj-2').attr('src', 'public/imgs/amc-2.png');
	$('button').removeClass('selected');
    $(this).addClass('selected');
});
$('#2-3').on('click', function(){
	$('#proj-2').attr('src', 'public/imgs/amc-3.png');
	$('button').removeClass('selected');
    $(this).addClass('selected');
});

$('#1-1').on('click', function(){
	$('#proj-1').attr('src', './public/imgs/highway-1.png');
	$('button').removeClass('selected');
    $(this).addClass('selected');
});
$('#1-2').on('click', function(){
	$('#proj-1').attr('src', 'public/imgs/highway-2.png');
	$('button').removeClass('selected');
    $(this).addClass('selected');
});
$('#1-3').on('click', function(){
	$('#proj-1').attr('src', 'public/imgs/highway-3.png');
	$('button').removeClass('selected');
    $(this).addClass('selected');
});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top-50
    }, 500);