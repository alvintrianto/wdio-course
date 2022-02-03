import blogPage from "../pages/blog-page";

describe('Blog Menu', () => {
    it('Get the list of all Recent Posts & assert the lenght of each list item > 1 & assert the total', async () => {
        //Open blog page
        await blogPage.open();
        
        // Get the Recent Post List Elements
        const recentPostList = blogPage.recentPost;
        
      
        // Loop through the list and assert the text length is greater than 10
        for (const item of recentPostList){
            let text = await item.getText();
            await expect(text.length).toBeGreaterThan(10);
        }

        // Asser the total length of the list is 5
        await expect(recentPostList.length).toEqual(5);
        
    });
})