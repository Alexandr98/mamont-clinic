import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

$(document).ready(function () {

	var $toggleButton = $('.toggle-button'),
		$menuWrap = $('.menu-wrap');

	$toggleButton.on('click', function () {
		$(this).toggleClass('button-open');
		$menuWrap.toggleClass('menu-show');
	});

	$('.overlay').delay(5000).fadeIn(5000);

	$(function () {
		var front = $('.front'),
			others = ['left', 'right'];

		$('.wrap').on('click', '.items', function () {
			var $this = $(this);

			$.each(others, function (i, cl) {
				if ($this.hasClass(cl)) {
					front.removeClass('front').addClass(cl);
					front = $this;
					front.addClass('front').removeClass(cl);
				}
			});
		});
	});

	$('select').formSelect();

});