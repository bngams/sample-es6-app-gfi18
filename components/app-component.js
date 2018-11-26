import { providers } from '../app.js';

export class AppComponent extends HTMLElement {

    constructor(...args) {
        super(); // call parent constructor
        this.injections = new Array();
        for (let arg of args) {
            console.log("injecting " + arg);
            this.injections[arg] = providers[arg];
        }
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
