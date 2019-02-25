import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'owl.carousel/dist/owl.carousel.min';


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
	$('.datepicker').datepicker();
	$('.timepicker').timepicker();


	$('.owl-carousel').children().each(function (index) {
		$(this).attr('data-position', index);
		
	});

	$('.owl-carousel').owlCarousel({
		center: true,
		loop: true,
		items: 3,
		// autoplay:false,
		responsive:{
			0:{
				items:2,
				center: false,
				// autoplay:true
			},
			901:{
				items:3,
				center: true,
				// autoplay:true
			}
		}
	});

	$(document).on('click', '.owl-item>.photo', function () {
		$('.owl-carousel').trigger('to.owl.carousel', $(this).data('position'));
	});
});