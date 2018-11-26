import { AppComponent } from './app-component.js';
import { ProductCard } from './product-card.js';
import { ProductService } from '../services/product-service.js';

const TEMPLATE = `
    <div class="mdl-grid">
        <div id="products-container">
        </div>
    </div>
`;

export class ProductList extends AppComponent {

    display() {
        this.innerHTML = TEMPLATE; // set HTML content
        componentHandler.upgradeElement(this); // display MDL / reinit comp
    }

    bindElements() {
        this.productContainer = this.querySelector("#products-container");
    }

    bindEvents() {
        this.handleProductAddEvent();
    }

    handleProductAddEvent() {
        document.addEventListener('product-add', (e) => {
            // add a product name
            this.productContainer.appendChild(new ProductCard(e.detail));
        })
    }

    onReady() {
        console.log('Product List Component Ready');
        this.loadProducts();
    }

    loadProducts() {
        this.productService = new ProductService();
        this.productService.fetchProducts()
            .then((data) => {
                this.products = JSON.parse(data);
                this.refreshProducts();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    refreshProducts() {
        for (let product of this.products) {
            this.productContainer.appendChild(new ProductCard(product));
        }
    }

}