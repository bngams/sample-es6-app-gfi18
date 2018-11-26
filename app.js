import { ProductForm } from './components/product-form.js';

export class App {

    constructor() {
        // create <product-form> markup
        customElements.define('product-form', ProductForm);
    }
}

new App();