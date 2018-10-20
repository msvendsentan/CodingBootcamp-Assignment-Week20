const db = require("../models");

module.exports = {
    writeAllArticles: function(req, res) {

    },
    getAllArticles: function(req, res) {
        db.Article.find({}).then(function(dbArticle) {
            res.json(dbArticle);
        }).catch(function(err) {
            res.json(err);
        });
    },
    getUnsavedArticles: function(req, res) {
        db.Article.find({ saved: false }).then(function(dbArticle) {
            res.json(dbArticle);
        }).catch(function(err) {
            res.json(err);
        });
    },
    getSavedArticles: function(req, res) {
        db.Article.find({ saved: true }).then(function(dbArticle) {
            res.json(dbArticle);
        }).catch(function(err) {
            res.json(err);
        });
    },
    changeArticleState: function(req, res) {
        db.Article.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        ).then(function(dbArticle) {
            res.json(dbArticle);
        }).catch(function(err) {
            res.json(err);
        });
    },
    addNote: function(req, res) {
        db.Note.create(req.body).then(function(dbNote) {
            return db.Article.findOneAndUpdate(
                { _id: req.params.id },
                { $push: {notes: dbNote._id } },
                { new: true }
            );
        }).then(function(dbArticle) {
            res.json(dbArticle);
        }).catch(function(err) {
            res.json(err);
        });
    },
    editNote: function(req, res) {
        db.Note.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        ).then(function(dbNote) {
            res.json(dbNote);
        }).catch(function(err) {
            res.json(err);
        });
    },
    deleteNode: function(req, res) {
        db.Note.findByIdAndRemove({ _id: req.params.id }).then(function(dbNote) {
            res.json(dbNote);
        }).catch(function(err) {
            res.json(err);
        });
    },
    getArticleWithNote: function(req, res) {
        db.Article.findOne({ _id: req.params.id })
            .populate("notes")
            .then(function(dbArticle) {
                res.json(dbArticle);
            }).catch(function(err) {
                res.json(err);
            });
    }
}