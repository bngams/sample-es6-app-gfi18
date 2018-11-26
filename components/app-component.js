export class AppComponent extends HTMLElement {

    constructor() {
        super(); // call parent constructor
    }

    connectedCallback() {
        // on display
        this.display();
        this.bindElements();
        this.bindEvents();
        this.onReady();
    }

    display() { }
    bindElements() { }
    bindEvents() { }
    onReady() { }

}
