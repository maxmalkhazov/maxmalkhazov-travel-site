import $ from "jquery";

class MobileMenu {
	constructor() {
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.siteHeader = $(".site-header");
		this.events();
	}
	
	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}
	
	toggleTheMenu() {
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}
}

// var MobileMenu = function() {
// 	this.menuIcon = $(".site-header__menu-icon");
// 	this.menuContent = $(".site-header__menu-content");
// 	this.siteHeader = $(".site-header");
// 	this.events();
// }

// MobileMenu.prototype.events = function() {
// 	this.menuIcon.click(this.toggleTheMenu.bind(this));
// }

// MobileMenu.prototype.toggleTheMenu = function() {
// 	this.menuContent.toggleClass("site-header__menu-content--is-visible");
// 	this.siteHeader.toggleClass("site-header--is-expanded");
// 	this.menuIcon.toggleClass("site-header__menu-icon--close-x");
// }

export default MobileMenu;
