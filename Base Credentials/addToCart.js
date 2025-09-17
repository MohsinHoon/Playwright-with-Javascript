import { BaseCredentials } from './BaseCredentials.js';

export class addToCartProduct extends BaseCredentials {
    async addToCart(product){
        await this.page.getByRole('link', { name: product, exact: true }).click()
        await this.page.locator('#add-to-cart-button-2').click()
    }
}