const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AccountPage extends Page {
    /**
     * define selectors using getter methods
     */

    get headerTitle () { return $('h1[class="primary-header bordered mb-0"]') }
    get OrdersMenu () { return $('a[class="isOrder text-uppercase"]') } // My Orders
    get OrdersTitle () { return $('h2[class="secondary-header bordered mb-0"]') } 
    get PaymentsMenu () { return $('a[class="isPayment text-uppercase"]') } // Saved Payments
    get AddressMenu () { return $('a[class="isAddress text-uppercase"]') } // Address Book
    get AccountsMenu () { return $('a[class="isAccount text-uppercase"]') } //Account Settings
    get SubTitles () { return $('h2[class="secondary-header bordered"]') } 

    async OpenPayments () {
        await (await this.PaymentsMenu).click();
    }

    async OpenAddress () {
        await (await this.AddressMenu).click();
    }

    async OpenAccount () {
        await (await this.AccountsMenu).click();
    }

    async OpenOrders() {
        await (await this.OrdersMenu).click();
    }
}

module.exports = new AccountPage();
