/**
* Hide Loader left and right sections with translation and set overflow-y's body to initial
*/
function hideLoader() {
	$('.section-left').css({"-webkit-transform":"translateX(-100%)"})
					.css({"transform":"translateX(-100%)"});
	$('.section-right').css({"-webkit-transform":"translateX(100%)"})
					.css({"transform":"translateX(100%)"});
	$('.section-left').hide(1000);
	$('.section-right').hide(1000);
	$('body').css({"overflow-y":"initial"});
}

$('#loaderImgLeft').click(function() {hideLoader();});
$('#loaderImgRight').click(function() {hideLoader();});