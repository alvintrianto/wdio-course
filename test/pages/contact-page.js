class contactPage{
    open(){
        return browser.url('/contact');
    }

    get nameInput(){
        return $('.contact-name input');
    }

    get emailInput(){
        return $('.contact-email input');
    }

    get phoneInput(){
        return $('.contact-phone input');
    }

    get messageInput(){
        return $('.contact-message textarea');
    }

    get btnSubmit(){
        return $('#evf-submit-277');
    }

    get alertMessage(){
        return $('[role="alert"]');
    }

    async submitForm(name,email,phone,message){
        await this.nameInput.addValue(name);
        await this.emailInput.addValue(email);
        await this.phoneInput.addValue(phone);
        await this.messageInput.addValue(message);
        await this.btnSubmit.click();
    }
}

export default new contactPage();