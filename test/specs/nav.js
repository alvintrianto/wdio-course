import HomePage from "../pages/home-page";
import allureReporter from '@wdio/allure-reporter';

describe('Navigation Menu', () => {
    it('Get the text of all menu item & assert them', async () => {
        allureReporter.addFeature("Navigation");
        allureReporter.addSeverity("critical");
        
        //Open homepage
        await HomePage.open();
        
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
        const navLinks = await HomePage.NavComponent.linksNavMenu;

        for(const link of navLinks) {
            actualLinks.push(await link.getText());
        }
        
        await expect(expectedLinks).toEqual(actualLinks);
    });

    it('Get the text of all menu item & assert them - using wait commands', async () => {
        //Open homepage
        await HomePage.open();
        
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

        //await $('#primary-menu .menu-item.tg-header-button-wrap').waitForeDisplayed({timeout: 2000});

        //wait until the Home text is diplayed on the navigation menu
        await browser.waitUntil(async function() {
            const homeText = await HomePage.NavComponent.firstNavMenu.getText(); //Home
        })

        const navLinks = await HomePage.NavComponent.linksNavMenu;  

        for(const link of navLinks) {
            actualLinks.push(await link.getText());
        }
        
        await expect(actualLinks).toEqual(expectedLinks);
    });
})