import { AuthPage } from './basic_crendential.js';
import { AuthData } from '../Fixtures/basicCredentialsTestData.js';

export class BaseCredentials {
    constructor(page) {
        this.page = page;
        this.authPage = new AuthPage(page);
    }

    async login() {
        await this.authPage.LoginDetails(AuthData.login.email, AuthData.login.password);
    }
}