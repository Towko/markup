jQuery(".toggler-btn").on("click", function () {
	jQuery(".toggler-btn").removeClass("active");
	jQuery(this).addClass("active");
})

jQuery('.brand-slider').slick({
	slidesToShow: 9,
	slidesToScroll: 3,
	prevArrow: '<button class="slick-arrow--prev icon-arrow-left"></button>',
	nextArrow: '<button class="slick-arrow--next icon-arrow-right"></button>',
	mobileFirst: true,
	infinite: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 9,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 720,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 0,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
	]
});

jQuery(".form-radio__option").on('click', function () {
	$(".form-radio__option").removeClass('active');
	$(this).addClass("active");
})

if (jQuery(window).width() < 1250) {
	jQuery(".tariff-card__showmore").on("click", function () {
		jQuery(".tariff-full").toggleClass("active");
	})
}

jQuery(window).resize(function() {
	if (jQuery(window).width() < 1250) {
		jQuery(".toggler-btn").on("click", function () {
			jQuery(".toggler-btn").removeClass("active");
			jQuery(this).addClass("active");
		})
	}

 });