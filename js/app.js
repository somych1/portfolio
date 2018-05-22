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