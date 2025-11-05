const path = require('path');

const aboutPage = (req, res) => {
    res.render(path.join(__dirname, '../views/about.ejs'), {
        name: "Ahmed Soltan",
        message: "This is the about page"
    });
};

module.exports = {
    aboutPage
};
