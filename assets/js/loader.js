function fadeTransition() {
	$('#loader-wrapper').fadeOut("1000", function(){$('#loader-wrapper').hide(0);});
	$('.centered-div span').show(5);
	$('body').css({"overflow-y": "initial"});
}


$('.btn-loader').click(function(){
	fadeTransition();
});