import ready, { HTML } from './utils';
import initMobileNav from './components/burgerMobile';
import initTabs from './components/tabsInit';
import initAccordion from './components/accInit';
import initOpenClose from './components/openClose';
import initTooltip from './components/tooltip';
import initSlickCarousel from './components/slick';
import initDropDownClasses from './components/hasDropdown';
import initTouchNav from './components/touchNav';
import initFilters from './components/filters';
// import initPrices from './components/prices';

ready(() => {
    HTML.classList.add('is-loaded');
    initMobileNav();
    initTabs();
    initAccordion();
    initOpenClose();
    initSlickCarousel();
    initTooltip();
    initTouchNav();
    initDropDownClasses();
    initFilters();
    // initPrices();
});