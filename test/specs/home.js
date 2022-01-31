//Practice E-Commerce Site - Automation Bro
//Function Definition
function UrlContain(urlnya){
    return expect(browser).toHaveUrlContaining(urlnya)
}

function openHomepage(){
    return browser.url('https://practice.automationbro.com/')
}

describe('Home',() =>{
    it('Open URL & assert title', async () => {
        //Open URL
        await openHomepage();

        //Assert title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');
    });

    it('Open About Page & assert URL', async () => {
        //Open URL
        await browser.url('https://practice.automationbro.com/about/');

        //Assert title
        await expect(browser).toHaveUrl('https://practice.automationbro.com/about/');
    });

    it('Click get started btn & asser url contains get-started text', async () => {
        //Open Home Page
        await openHomepage();

        //Click get started button
        await $('#get-started').click()

        //Assert title
        //await expect(browser).toHaveUrlContaining('https://practice.automationbro.com/');
        await UrlContain('https://practice.automationbro.com/');
    });

    it('Click on Logo button & assert the URL doesn\'t contain \'get-started\' text', async () => {
        //Open Home Page
        await openHomepage();

        //Click get started button
        
        await $('//img[@alt="Practice E-Commerce Site"]').click()

        //Assert title
        //await expect(browser).not.toHaveUrlContaining('get-started');
        await UrlContain('https://practice.automationbro.com/');
    });

    it('Find heading element & assert the text', async () => {
        //Open Home Page
        await openHomepage();

        //find heading element
        const headingEl = await $('.elementor-widget-container h1');

        //get the text
        const headingText = await headingEl.getText();
        

        //Assert the text
        // await expect(headingText).toEqual('Think different. Make different.');
        await expect(headingEl).toHaveText('Think different. Make different.');
    });
});


//https://practice.automationbro.com/