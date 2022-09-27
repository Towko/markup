import 'Plugins/burgerPlugin';

export default function initMobileNav() {
	jQuery('body').mobileNav({
		menuActiveClass: 'nav-active',
		menuOpener: '.header__nav-opener'
	});
}