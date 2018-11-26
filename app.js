import { ProductForm } from './components/product-form.js';
import { ProductList } from './components/product-list.js';
import { ProductCard } from './components/product-card.js';
import { ProductService } from './services/product-service.js';


export class App {

    constructor() {
        // create <product-form> markup
        customElements.define('product-form', ProductForm);
        customElements.define('product-list', ProductList);
        customElements.define('product-card', ProductCard);
    }
}

export const providers = {
    productService: new ProductService()
}

new App();