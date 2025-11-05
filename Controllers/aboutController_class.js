const path = require('path');

class AboutController {
    constructor() {
        // You can initialize any class properties here
        this.defaultName = "Ahmed Soltan";
        this.defaultMessage = "This is the about page";
    }

    // Method to render the about page
    renderAboutPage(req, res) {
        try {
            res.render(path.join(__dirname, '../views/about.ejs'), {
                name: this.defaultName,
                message: this.defaultMessage
            });
        } catch (error) {
            console.error('Error rendering about page:', error);
            res.status(500).send('Internal Server Error');
        }
    }

    // You can add more methods related to the about functionality here
    // For example, a method to update the about page content
    updateAboutContent(newName, newMessage) {
        this.defaultName = newName || this.defaultName;
        this.defaultMessage = newMessage || this.defaultMessage;
        return { name: this.defaultName, message: this.defaultMessage };
    }
}

// Export an instance of the class
module.exports = new AboutController();
