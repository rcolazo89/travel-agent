import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

var mobileMenu = new MobileMenu();
var revealOnScroll = new RevealOnScroll();
import $ from 'jquery';

//class^ objects below 
var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"),"85%");
new RevealOnScroll($(".testimonial"), "70%");
