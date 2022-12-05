import 'Plugins/slickPlugin';
export default function initSlickCarousel() {
	jQuery('.slick-slider').slick({
		slidesToScroll: 1,
		rows: 0,
		prevArrow: '<button class="slick-arrow--prev icon-arrow-left"></button>',
		nextArrow: '<button class="slick-arrow--next icon-arrow-right"></button>'
	});

}
