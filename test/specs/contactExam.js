import contactPage from "../pages/contact-page";

describe('Contact', () => {
    it('Fill all the input fields and submit form & Asser the success message', async () => {
        //Open contact page
        await contactPage.open();

        //Input Name
       /* await contactPage.nameInput.addValue('Test Name');

        //addValue - untuk form yang masih kosong
        //setValue - untuk form yang awalnya ada data terus diisi
        //Input Email
        await contactPage.emailInput.addValue('email@test.com');

        //Input Phone
        await contactPage.phoneInput.addValue('621353513443');

        //Input Message
        await contactPage.messageInput.addValue('Nice to have conversation');

        //Debuging

        // 1. Change wdio.conf.js
        // debuging in console log
        //console.log(await $('#evf-submit-2778'))

        //await browser.debug();

        //Click Submit
        await contactPage.btnSubmit.click();
        */

        var name = 'Test Name';
        var email = 'test@mail.com';
        var phone = '12343155';
        var message = 'This is a test message';

        contactPage.submitForm(name,email,phone,message);


        //Validate success text
        const SuccessAlert =  contactPage.alertMessage;
        await expect(SuccessAlert).toHaveTextContaining('Thanks for contacting us! We will be in touch with you shortly');

    });
})