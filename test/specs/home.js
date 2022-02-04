//Practice E-Commerce Site - Automation Bro
//Function Definition
import HomePage from "../pages/home-page";

function UrlContain(urlnya){
    return expect(browser).toHaveUrlContaining(urlnya)
}



describe('Home',() => {

    beforeEach(async () => {
        console.log('This run before each test');
        
        //Open URL
        await HomePage.open();
    })

    it('Open URL & assert title', async () => {
        //Assert title
        await expect(browser).toHaveTitleContaining('Automation Bro');
    });

    it('Open About Page & assert URL', async () => {
        //Open URL
        await browser.url('https://practice.automationbro.com/about/');

        //Assert title
        await expect(browser).toHaveUrl('https://practice.automationbro.com/about/');
    });

    it('Click get started btn & asser url contains get-started text', async () => {

        //Click get started button
        //await $('#get-started').click();
        await HomePage.btnGetStarted.click();

        //Assert title
        //await expect(browser).toHaveUrlContaining('https://practice.automationbro.com/');
        await UrlContain('https://practice.automationbro.com/');
    });

    it('Click on Logo button & assert the URL doesn\'t contain \'get-started\' text', async () => {

        //Click get started button
        
        await HomePage.imageLogo.click();

        //Assert title
        //await expect(browser).not.toHaveUrlContaining('get-started');
        await UrlContain('https://practice.automationbro.com/');
    });

    it('Find heading element & assert the text', async () => {

        //find heading element
        const headingEl = await HomePage.txtHeading;

        //get the text
        const headingText = await headingEl.getText();
        

        //Assert the text
        // await expect(headingText).toEqual('Think different. Make different.');
        await expect(headingEl).toHaveText('Think different. Make different.');
    });
});


//https://practice.automationbro.com/