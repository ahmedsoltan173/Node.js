const express = require("express");
const router = express.Router();
const aboutController = require('../Controllers/aboutController');

// router.get("/about", aboutController.renderAboutPage.bind(aboutController));
router.get("/about", aboutController.aboutPage);
router.post("/blogs", aboutController.createBlogPost);

module.exports = router;