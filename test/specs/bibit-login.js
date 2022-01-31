describe('Bibit login', () => {
    it('Get the text of all menu item & assert them', async () => {
        //Open homepage
        await browser.url('https://ui.lab.bibit.id/staging/');

        await $('//*[contains(text(),"Login")]').click();

        await $('.PhoneInput input').addValue('082214928397');

        await $('//*[@id="login-btn-login"]').click();
        
        const pilihbtn = await $('//*[@class="am-button bit-margin-top-20 margin-bottom-10 am-button-primary"]');

        //Tunggu hinga element muncul
        await pilihbtn.waitForClickable();
        await pilihbtn.click();

        const OTP = await $('//*[@id="devOtp"]').getText();
        
        var otp1 = OTP.charAt(0);
		var otp2 = OTP.charAt(1);
		var otp3 = OTP.charAt(2);
		var otp4 = OTP.charAt(3);
		
	    //var num1 = Character.getNumericValue(otp1);
   	    //var num2 = Character.getNumericValue(otp2);
	    //var num3 = Character.getNumericValue(otp3);
   	    //var num4 = Character.getNumericValue(otp4);
   	    
        await $("//div[@data-num="+otp1+"]").click();
        await $("//div[@data-num="+otp2+"]").click();
        await $("//div[@data-num="+otp3+"]").click();
        await $("//div[@data-num="+otp4+"]").click();

        await expect(browser).toHaveUrlContaining('staging');
    });
})