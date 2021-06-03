describe('Main S&L test', () => {
    it('should go to inspiration page and find title', async () => {
        await browser.url(`https://www.serenaandlily.com/`);
        await browser.pause(3000)

        await (await $('.ui-dialog-titlebar-close')).click();

        await (await $('.inspiration')).click();

        await expect($('.headline-section')).toBeExisting();
    });
});

