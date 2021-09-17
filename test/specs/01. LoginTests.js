const LoginPage = require('../pageobjects/login.page');
const AccountPage = require('../pageobjects/account.page');
const RegisteredEmail = 'gemurillom@hotmail.com';
const RegisteredPassword = 'gmurillo';
const WrongPassword = 'somethingwrong';
const DSOEmail = 'geovanny.murillo@serenaandlily.com';
const DSOPassword = 'DSOPassword';

describe('Display first time popup', () => {
    it('Will close the popup to pass the test', async () => {
        await LoginPage.open();
        await expect(await LoginPage.closePopup(0)).toBe(true);
    });
});

describe('Login into S&L - error messages', () => {
    it('Should login with invalid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(RegisteredEmail, WrongPassword);
        await expect(await LoginPage.isErrorDisplayed()).toBe(true);

    });
});

describe('Login into S&L as Registered user', () => {
    it('Login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(RegisteredEmail, RegisteredPassword);
        await expect(AccountPage.headerTitle).toBeExisting();
        await expect(AccountPage.headerTitle).toHaveTextContaining('My Account');
    });
});


