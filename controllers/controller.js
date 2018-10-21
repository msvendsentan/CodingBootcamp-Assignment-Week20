const db = require("../models");
const request = require("request");
// q - search term, begin_date - YYYYMMDD, end_date

module.exports = {
    writeAllArticles: function(req, res) {
        db.Article.find({ saved: false }).remove().then(function() {
            console.log("Old articles purged");
            console.log(req.body.query,req.body.begin_date)
        });
        if (req.body.begin_date === "") {
            delete req.body.begin_date;
        }
        if (req.body.end_date === "") {
            delete req.body.end_date;
        }
        request.get({
            url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
            qs: {
                "api-key": "fe79e56fcc7e48d298bd85ff2b763a95",
                "q": req.body.query,
                "begin_date": req.body.begin_date,
                "end_date": req.body.end_date
            }
        }, function(err, response, body) {
            body = JSON.parse(body);
            body.response.docs.forEach(article => {
                let newArticle = {
                    title: article.headline.main,
                    link: article.web_url,
                    summary: article.snippet,
                    saved: false
                }
                db.Article.create(newArticle).then(function(dbArticle) {
                    console.log(dbArticle);
                }).catch(function(err) {
                    res.json(err);
                });
            });
            res.send("Search Complete");
        });
    },
    getAllArticles: function(req, res) {
        db.Article.find({}).then(function(dbArticle) {
            res.json(dbArticle);
        }).catch(function(err) {
            res.json(err);
        });
    },
    saveArticle: function(req, res) {
        db.Article.findOneAndUpdate(
            { _id: req.params.id },
            { saved: true },
            { new: true }
        ).then(function(dbArticle) {
            res.json(dbArticle);
        }).catch(function(err) {
            res.json(err);
        });
    },
    deleteArticle: function(req, res) {
        db.Article.findByIdAndRemove({ _id: req.params.id }).then(function(dbArticle) {
            res.json(dbArticle);
        }).catch(function(err) {
            res.json(err);
        });
    }

    /*
    getArticleWithNote: function(req, res) {
        db.Article.findOne({ _id: req.params.id })
            .populate("notes")
            .then(function(dbArticle) {
                res.json(dbArticle);
            }).catch(function(err) {
                res.json(err);
            });
    }
    */
}