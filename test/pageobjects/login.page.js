const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('input[placeholder="EMAIL ADDRESS"]') }
    get inputPassword () { return $('input[placeholder="PASSWORD"]') }
    get btnClosePopup () { return $('a[role="button"]') }
    get btnSubmit () { return $('button[name="dwfrm_login_login"]') }
    get divError () {return $('div[id="login-error-msg"]')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

    /**
     * 
     * @param {*} attempts - indicates the number of attempts before failing
     * @returns true if popup was closed, false otherwise
     */
    async closePopup(attempts)
    {
        try
        {
            await (await this.btnClosePopup).click();
            return true;

        }
        catch(exception){}
        {
            if (attempts < 10)
                return await this.closePopup(attempts + 1);
            else
                return false;
        }
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('account');
    }

    /**
     * 
     * @returns true if found, false otherwise
     */
    async isErrorDisplayed()
    {
        try{
            await (await this.divError).click();
            //if can be clicked then it is displayed
            return true;
        }
        catch (exception)
        {
            return false;
        }
    }
}

module.exports = new LoginPage();
