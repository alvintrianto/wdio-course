import blogPage from "../pages/blog-page";

describe('Blog Menu', () => {
    it('Get the list of all Recent Posts & assert the lenght of each list item > 1 & assert the total', async () => {
        //Open homepage
        //await browser.url('/');

        //Click Blog
       // await $('//*[@id="menu-item-490"]').click();

       //Open blog
       await blogPage.open();
        
        //Declare aray and variable (to check lenght)
        //const blogList = [];
        //var lenLess10 = false;

        //const navLinks = await $('#primary-menu').$$('li[id*=menu');
        //Get blog list element by CSS Selector
        const postlist = await blogPage.recentPost;

        for(const link of postlist) {
            var blogText = await link.getText(); 
            await expect(blogText.length).toBeGreaterThan(10)
        //    blogList.push(blogText);   //Push to the array of blogList
        }
        
        //Check the array list 
        await expect(postlist.length).toEqual(5);

        //Check the individual char 
        //await expect(lenLess10).toEqual(false);

    });
})