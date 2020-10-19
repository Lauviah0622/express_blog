const express = require('express');
const router = express.Router();

const pageController = require('../controllers/pageController');
const postController = require('../controllers/postController');
const userController = require('../controllers/userController');

const isLogin = (req, res, next) => {
    if (!req.session.login) {
        res.send('get the fuck off!!!');
        res.redirect('/')
        res.end();
        return 
    }
    next()
}

// page
router.get('/', pageController.index);
router.get('/about', pageController.about);
router.get('/article/:id', pageController.article);
router.get('/add', isLogin, pageController.addPost);
router.get('/edit/:id', isLogin, pageController.editPost);
router.get('/categories', pageController.categories);
router.get('/admin', isLogin, pageController.admin);


// APIs
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/delete/:id', isLogin, postController.delete);
router.post('/article', isLogin, postController.add);
router.post('/article/:id', isLogin, postController.update);

module.exports = router