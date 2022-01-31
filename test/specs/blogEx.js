describe('Blog Menu', () => {
    it('Get the list of all Recent Posts & assert the lenght of each list item > 1 & assert the total', async () => {
        //Open homepage
        await browser.url('/blog');
        
        // Get the Recent Post List Elements
        const recentPostList = $$('#recent-posts-3 li');
        

        // Loop through the list and assert the text length is greater than 10
        for (const item of recentPostList){
            const text = await item.getText();
            await expect(text.length).toBeGreaterThan(10);
        }

        // Asser the total length of the list is 5
        await expect(recentPostList).toHaveLength(5);
    });
})