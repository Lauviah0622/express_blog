const db = require('../models');
const Article = db.Article;
const Category = db.Category;

module.exports = {
    add: async (req, res) => {
        let {title, content, category: categoryId, newCate} = req.body;
        let newCateId = null;
        if (newCate) {
            newCateData = await Category.create({name: newCate});
            // 這裡是不是只能用 var？ 
        }
        newCateId = newCateData.dataValues.id

        await Article.create({title, content, categoryId: newCateId || categoryId })
        res.redirect('/admin');
        
    },
    update: async (req, res) => {
        const id = req.params.id;
        const {title, content, category: categoryId, newCate} = req.body;
        await Article.update({title, content, categoryId}, {
            where: {id}
        })
        res.redirect('/admin');


    },
    delete: async (req, res) => {
        const id = req.params.id;
        await Article.update({idDelete: false}, {
            where: {id}
        })
        res.redirect('/admin');

    }
    
}