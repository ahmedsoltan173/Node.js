const path = require('path');
// ...existing code...



const aboutPage = (req, res) => {
    const blogs=[
        {title:"Blog 1", snippet:"This is blog 1", body:"This is the body of blog 1"},
        {title:"Blog 2", snippet:"This is blog 2", body:"This is the body of blog 2"},
        {title:"Blog 3", snippet:"This is blog 3", body:"This is the body of blog 3"},

    ];

    res.render(path.join(__dirname, '../views/about.ejs'), {
        name: "Ahmed Soltan",
        blogs:blogs,
        message: "This is the about page"
    });
};
const createBlogPost = (req, res) => {
    console.log('body:', req.body);
    console.log('title:', req.body.title);
    res.send('Blog post created with title: ' + req.body.title);
}

module.exports = {
    aboutPage,
    createBlogPost
};
