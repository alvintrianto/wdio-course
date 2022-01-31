const path = require('path');

describe('Upload Test', () => {
    it('Simple Upload test', async () => {
        //Open URL
        await browser.url('https://the-internet.herokuapp.com/upload');

        //store test file path
        const filePath = path.join(__dirname,'../data/rock_bushes_trees_199532_3840x2160.jpg');

        //upload test file
        const remoteFilePath = await browser.uploadFile(filePath);
            
        //set file path value in the input field
        await $('#file-upload').setValue(remoteFilePath);
        await $('#file-submit').click();
        
        // Assertion
        await expect($('h3')).toHaveText('File Uploaded!');
    })

    it('Upload on a hidden input field', async () => {
        //Open URL
        await browser.url('/cart/');

        //store test file path
        const filePath = path.join(__dirname,'../data/testing-logo-design-template-ce84480d61b3db9a8e1522a99875832f_screen.jpg');

        //upload test file
        const remoteFilePath = await browser.uploadFile(filePath);
            
        //remove hidden class
        await browser.execute("document.querySelector('#upfile_1').className=''");
        //set file path value in input field
        await $('#upfile_1').setValue(remoteFilePath);
        await $('#upload_1').click();
        
        // Assertion
        await expect($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining('uploaded successfully');
    })
})
