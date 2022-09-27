import 'Plugins/accPlugin';

export default function initAccordion() {
	jQuery('.accordion').slideAccordion({
		opener: '.opener',
		slider: '.slide',
		animSpeed: 300
	});

	jQuery('.footer-accordion').slideAccordion({
		opener: '.opener',
		slider: '.slide',
		animSpeed: 300
	});

	jQuery('.header-accordion').slideAccordion({
		opener: '.opener',
		slider: '.slide',
		animSpeed: 300
	});
}
