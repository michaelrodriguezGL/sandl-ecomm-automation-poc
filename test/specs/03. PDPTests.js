const LoginPage = require('../pageobjects/login.page');
const AccountPage = require('../pageobjects/account.page');
const PDPPage = require('../pageobjects/PDP.page');
const RegisteredEmail = 'gemurillom@hotmail.com';
const RegisteredPassword = 'gmurillo';

describe('Display first time popup', () => {
    it('Will close the popup to pass the test', async () => {
        await LoginPage.open();
        await LoginPage.closePopup(0);
    });
});

describe('PDP as registered user', () => {
    it('Open the menu options', async () => {
        await LoginPage.open();
        await LoginPage.login(RegisteredEmail, RegisteredPassword);
        await expect(AccountPage.headerTitle).toBeExisting();
        await expect(AccountPage.headerTitle).toHaveTextContaining('My Account');

        //Open payments menu and check the title
        await PDPPage.open('47777.html'); // la joya basket
        await expect(PDPPage.pdpImage).toBeExisting();
        await PDPPage.AddToBag();
        await expect(PDPPage.btnViewBag).toBeExisting();
    });
});



