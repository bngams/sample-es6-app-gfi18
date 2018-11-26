import { AppComponent } from './app-component.js';
import { ProductCard } from './product-card.js';

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
    }

}