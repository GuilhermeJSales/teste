export default class MobileMenu {
  constructor(button, ulMenu, bg) {
    this.button = document.querySelector(button);
    this.ulMenu = document.querySelector(ulMenu);
    this.bgBlur = document.querySelector(bg);
    this.activeClass = 'active';
    this.outside = 'outside';
    this.html = document.documentElement;

    this.addMenuClass = this.addMenuClass.bind(this);
    this.outsideClick = this.outsideClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  addMenuClass() {
    this.button.classList.add(this.activeClass);
    this.ulMenu.classList.add(this.activeClass);
    this.bgBlur.classList.add(this.activeClass);
    this.outsideClick(this.ulMenu);
  }

  outsideClick(element) {
    if (!element.hasAttribute(this.outside)) {
      element.setAttribute(this.outside, '');
      setTimeout(() => {
        this.html.addEventListener('click', this.handleOutsideClick);
      });
    }
  }

  handleOutsideClick(event) {
    if (!this.ulMenu.contains(event.target)) {
      this.html.removeEventListener('click', this.handleOutsideClick);
      this.ulMenu.removeAttribute(this.outside);
      this.button.classList.remove(this.activeClass);
      this.ulMenu.classList.remove(this.activeClass);
      this.bgBlur.classList.remove(this.activeClass);
    }
  }

  addEventMenu() {
    this.button.addEventListener('click', this.addMenuClass);
  }

  init() {
    if (this.button && this.ulMenu) {
      this.addEventMenu();
    }
    return this;
  }
}
