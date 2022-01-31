describe('Navigation Menu', () => {
    it('Get the text of all menu item & assert them', async () => {
        //Open homepage
        await browser.url('/');
        
        //Expected list
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ]

        const actualLinks = [];

        //const navLinks = await $('#primary-menu').$$('li[id*=menu');
        const navLinks = await $$('#primary-menu li[id*=menu]');

        for(const link of navLinks) {
            actualLinks.push(await link.getText());
        }
        
        await expect(expectedLinks).toEqual(actualLinks);
    });
})