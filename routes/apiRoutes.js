const controllers = require("../controllers");
const router = require("express").Router();

router.route("/articles")
    // Get all articles
    .get(controllers.controller.getAllArticles)
    // Save all articles to db
    .post()

router.route("/articles/:id")
    // Save/unsave article
    .post()
    // Delete article?
    .delete()

router.route("/notes/:id")
    // Edit note
    .post()
    // Delete note
    .delete()

module.exports = router;