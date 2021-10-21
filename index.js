class Navbar {
    constructor(target, menu) {
        if (target instanceof HTMLElement && menu instanceof HTMLElement) {
            this.btn = target;
            this.menu = menu;

            this.btn.addEventListener('click', () => {
                this.open();
            });
        } else {
            throw new TypeError("The Target and Menu arguments must be a DOM element."); 
        }
        
    }
    open() {
        if (this.isopen) {
            this.menu.classList.add('nav-hidden');
        } else {
            this.menu.classList.remove('nav-hidden');
        }

        this.isopen = !this.isopen;
    }
}