const db = require('../models/index');
const Article = db.Article;
const Category = db.Category;
const Op = require('sequelize').Op;

module.exports = {
    index: async (req, res) => {
        let dataArticles = await Article.findAll({
            attributes: ['id', 'title', 'content', 'categoryId', 'createdAt'],
            where: {
                isDelete: false,
                title: {
                    [Op.not]: '關於我'
                }
            },
            include: Category,
            raw: true
        })
        res.render('index', {articles: dataArticles})
    },
    about: async (req, res) => {
        let dataArticle = await Article.findOne({
            attributes: ['title', 'content'],
            where: {
                title: "關於我",
            },
        })
        res.render('about', {article: dataArticle})
    },
    article: async (req, res) => {
        const id = req.params.id;
        try {
            let dataArticle = await Article.findOne({
                attributes: ['id', 'title', 'content', 'categoryId', 'createdAt'],
                where: {
                    isDelete: false,
                    id,
                    title: {
                        [Op.not]: '關於我'
                    }
                },
                include: Category,
                raw: true
            });
            res.render('article', {article: dataArticle});

        } catch (err) {

            console.log(err);
            res.redirect('/');
            return 
        }


    },
    categories: async (req, res) => {
        let dataCategories = await Category.findAll({
            include: Article,
            order: [
                ['id', 'DESC']
            ],
            where: {
                '$Articles.title$': {
                    [Op.not]: '關於我'
                }
            }
        })
        console.log(dataCategories);
        res.render('categories', {categories: dataCategories});
    },
    admin: async (req, res) => {
        let dataArticles = await Article.findAll({
            attributes: ['id', 'title', 'content', 'categoryId', 'createdAt'],
            where: {
                isDelete: false
            },
            include: Category,
            raw: true
        })

        res.render('admin', { articles: dataArticles });
    },
    editPost: async (req, res) => {
        const id = req.params.id;
        const dataCategories = await Category.findAll({
            attributes: ['id', 'name']
        });

        const dataArticle = await Article.findOne({
            attributes: ['id', 'title', 'content', 'categoryId'],
            where: {
                isDelete: false,
                id
            }
        })
        res.render('post', {
            categories: dataCategories,
            id,
            article: dataArticle
        })
    },
    addPost: async (req, res) => {
        const dataCategories = await Category.findAll({
            attributes: ['id', 'name']
        });
        res.render('post', { categories: dataCategories })
    }

}