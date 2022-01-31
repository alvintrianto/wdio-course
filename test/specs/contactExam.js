describe('Contact', () => {
    it('Fill all the input fields and submit form & Asser the success message', async () => {
        //Open contact page
        await browser.url('/contact');

        //Input Name
        await $('.contact-name input').addValue('Test Name');

        //addValue - untuk form yang masih kosong
        //setValue - untuk form yang awalnya ada data terus diisi
        //Input Email
        await $('.contact-email input').addValue('email@test.com');

        //Input Phone
        await $('.contact-phone input').setValue('621353513443');

        //Input Message
        await $('.contact-message textarea').setValue('Nice to have conversation');

        //Debuging

        // 1. Change wdio.conf.js
        // debuging in console log
        //console.log(await $('#evf-submit-2778'))

         await browser.debug();

        //Click Submit
        await $('#evf-submit-2778').click()



        //Validate success text
        const SuccessAlert =  $('[role="alert"]');
        await expect(SuccessAlert).toHaveTextContaining('Thanks for contacting us! We will be in touch with you shortly');

    });
})