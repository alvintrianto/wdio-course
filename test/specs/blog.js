describe('Blog Menu', () => {
    it('Get the list of all Recent Posts & assert the lenght of each list item > 1 & assert the total', async () => {
        //Open homepage
        await browser.url('/');

        //Click Blog
        await $('//*[@id="menu-item-490"]').click();
        
        //Declare aray and variable (to check lenght)
        const blogList = [];
        var lenLess10 = false;

        //const navLinks = await $('#primary-menu').$$('li[id*=menu');
        //Get blog list element by CSS Selector
        const postlist = await $$('#recent-posts-3 li');

        for(const link of postlist) {
            blogText = await link.getText(); 
            if (blogText.length<10){
                lenLess10=true;    //If the length less than 10 the var change to true
            }
            blogList.push(blogText);   //Push to the array of blogList
        }
        
        //Check the array list 
        await expect(blogList).toHaveLength(5);

        //Check the individual char 
        await expect(lenLess10).toEqual(false);

    });
})