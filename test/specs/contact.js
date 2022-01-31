describe('Input contact', () => {
    it('Fill all the input fields and submit form & Asser the success message', async () => {
        //Open homepage
        await browser.url('/');

        //Click contact page
        await $('//*[@id="menu-item-493"]').click();
        
        //Data
        const name="Testing";
        const email="testing@mail.co";
        const phoneNum="628123514134";
        const Message="Ini adalah testing";

        //Input Name
        await $('//*[@id="evf-277-field_ys0GeZISRs-1"]').setValue(name);

        //Input Email
        await $('//*[@id="evf-277-field_LbH5NxasXM-2"]').setValue(email);

        //Input Phone
        await $('//*[@id="evf-277-field_66FR384cge-3"]').setValue(phoneNum);

        //Input Message
        await $('//*[@id="evf-277-field_yhGx3FOwr2-4"]').setValue(Message);

        //Click Submit
        await $('//*[@name="everest_forms[submit]"]').click()

        //Get success text
        const notifSuccess = await $('//*[@role="alert"]').getText();

        //Validate success text
        await expect(notifSuccess).toContain('Thanks');
    });
})