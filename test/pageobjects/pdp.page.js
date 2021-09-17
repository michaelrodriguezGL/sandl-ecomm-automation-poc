const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PDPPage extends Page {
    /**
     * define selectors using getter methods
     */

    get pdpImage () { return $('img[role="presentation"]') }
    get btnAdd () { return $('button[id="add-to-cart"]') } 
    get inStockMsg () { return $('p[class="in-stock-msg"]') } 
    get btnViewBag () { return $('a[href="https://www.devserenaandlily.com/shoppingbag"]') } 

    async AddToBag () {
        await (await this.btnAdd).click();
    }

    async OpenBag () {
        await (await this.btnViewBag).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open (item) {
        return super.open(item);
    }

}

module.exports = new PDPPage();
