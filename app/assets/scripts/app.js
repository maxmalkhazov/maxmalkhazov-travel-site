import $ from "jquery";
import MobileMenu from "./modules/mobileMenu.js";
import RevealOnScroll from "./modules/RevealOnScroll.js";

var mobileMenu = new MobileMenu();

new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");