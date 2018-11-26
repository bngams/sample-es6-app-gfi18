import { AppComponent } from './app-component.js';

const TEMPLATE = `
<div class="demo-card-square mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--expand">
        <h2 class="mdl-card__title-text" id="product-name"></h2>
    </div>
    <div class="mdl-card__supporting-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
    </div>
    <div class="mdl-card__actions mdl-card--border">
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            View Updates
        </a>
    </div>
</div>
`;

export class ProductCard extends AppComponent {

    constructor(product) {
        this.product = product;
    }

    display() {
        this.innerHTML = TEMPLATE; // set HTML content
        componentHandler.upgradeElement(this); // display MDL / reinit comp
    }

    bindElements() {
        this.productName = this.querySelector("#product-name");
    }

    bindEvents() {

    }

    onReady() {
        console.log('Product Card Component Ready');
        this.productName.innerHTML = this.product.name;
    }

}