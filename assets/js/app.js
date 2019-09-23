
// load images


//

// sticky navbar

var height = $('.social-media').height();

$(window).scroll(function () {
	if($(this).scrollTop() > height) {
		$('.navbar').addClass('fixed');
	} else {
		$('.navbar').removeClass('fixed')
	}
});

//

// dropdown bendera

$(".popup-trigger").hover(function(){
	$(".popup-content").toggleClass('popup-active');
});

//

const hamburger = document.getElementById("sidebar");

hamburger.addEventListener('click',()=>{
	$(".navbar-responsive").toggleClass("actived");
});

// const img_trigger = document.querySelectorAll('.img-hoax');
// img_trigger.addEventListener('click',()=>{
// 	let data = this.attr(src);
// 	console.log(data);
// 	$('.img-popup').addClass('active');
// })();\


$('.popup-img-trigger').click(function(){
	const img_source = $(this).children('img');
	let src_data = img_source.attr('src');
	console.log(src_data);
	$('.popup-backdrop').addClass('active');
	$('.popup-img').attr('src',src_data);
});

$('.popup-img').click(function(){
	event.stopPropagation();
})

$('.popup-backdrop').click(function(){
	$(this).removeClass('active');
});

// click

$(".btn").click(function(e){
	$(".demo").toggleClass('active');
})