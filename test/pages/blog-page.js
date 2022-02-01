class blogPage{
    open(){
        return browser.url('/blog');
    }

    get recentPost(){
        return $$('#recent-posts-3 li');
    }
}

export default new blogPage();