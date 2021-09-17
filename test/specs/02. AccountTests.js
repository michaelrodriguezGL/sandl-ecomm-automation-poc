const LoginPage = require('../pageobjects/login.page');
const AccountPage = require('../pageobjects/account.page');
const RegisteredEmail = 'gemurillom@hotmail.com';
const RegisteredPassword = 'gmurillo';

describe('Display first time popup', () => {
    it('Will close the popup to pass the test', async () => {
        await LoginPage.open();
        await LoginPage.closePopup(0);
    });
});

describe('Check Menu options', () => {
    it('Open the menu options', async () => {
        await LoginPage.open();
        await LoginPage.login(RegisteredEmail, RegisteredPassword);
        await expect(AccountPage.headerTitle).toBeExisting();
        await expect(AccountPage.headerTitle).toHaveTextContaining('My Account');

        //Open payments menu and check the title
        await AccountPage.OpenPayments();
        await expect(AccountPage.SubTitles).toHaveTextContaining('SAVED PAYMENTS');

        await AccountPage.OpenOrders();
        await expect(AccountPage.OrdersTitle).toHaveTextContaining('MY ORDERS');

        await AccountPage.OpenAddress();
        await expect(AccountPage.SubTitles).toHaveTextContaining('ADDRESS BOOK');

        await AccountPage.OpenAccount();
        await expect(AccountPage.SubTitles).toHaveTextContaining('ACCOUNT SETTINGS');
    });
});



