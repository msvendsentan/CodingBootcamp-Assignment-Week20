const controller = require("../controllers/controller");
const router = require("express").Router();

router.route("/articles")
    // Get all articles
    .get(controller.getAllArticles)
    // Save all articles to db
    .post(controller.writeAllArticles)

router.route("/articles/:id")
    // Save article
    .post(controller.saveArticle)
    // Delete article?
    .delete(controller.deleteArticle)

module.exports = router;