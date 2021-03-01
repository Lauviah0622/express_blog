const db = require('../models');
const Article = db.Article;
const Category = db.Category;

module.exports = {
    add: async (req, res) => {
        let {title, content, category: categoryId, newCate} = req.body;
        let newCateId = null;
        console.log(req.body);
        if (newCate) {
            console.log('new cate!!!!');
            newCateData = await Category.create({name: newCate});
            newCateId = newCateData.dataValues.id
        }

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
        console.log('delete!!!!');
        await Article.update({isDelete: true}, {
            where: {id}
        })
        res.redirect('/admin');

    }
    
}