import { AppComponent } from './app-component.js';

const TEMPLATE = `
    <div class="mdl-grid">
        <div class="mdl-cell  mdl-cell--6-col mdl-cell--3-offset">
            <form action="#" id="product-form">
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input" type="text" id="product-name-input"></input>
                    <label class="mdl-textfield__label" for="product-name-input">Product name</label>
                </div>
                <button type="button" id="submit-product" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                    Add
                </button>
            </form>
        </div>
    </div>
`;

export class ProductForm extends AppComponent {

    display() {
        this.innerHTML = TEMPLATE; // set HTML content
        componentHandler.upgradeElement(this); // display MDL / reinit comp
    }

    bindElements() {
        this.submitBtn = this.querySelector("#submit-product");
        this.nameInput = this.querySelector("#product-name-input");
    }

    bindEvents() {
        this.submitBtn.addEventListener('click', () => {
            // submit logic
            this.submitEvent();
        });
    }

    submitEvent() {
        let product = {
            name: this.nameInput.value
        };
        let event = new CustomEvent('product-add', { detail: product });
        document.dispatchEvent(event);
    }

    onReady() {
        console.log('Product Form Component Ready');
    }

}