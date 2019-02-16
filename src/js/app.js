
$(document).ready(function () {

	var $toggleButton = $('.toggle-button'),
		$menuWrap = $('.menu-wrap');

	$toggleButton.on('click', function () {
		$(this).toggleClass('button-open');
		$menuWrap.toggleClass('menu-show');
	});

	$('.overlay').delay(5000).fadeIn(5000);
});