import { Http } from './http.js';

export class ProductService {

    constructor() { }

    fetchProducts() {
        return Http.get('http://localhost:3004/product');
    }

}