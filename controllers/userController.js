module.exports = {
    login: (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        try {
            if (password !== 'admin' || username !== 'admin') throw Error('錯囉');
            req.session.login = true;
            res.redirect('/')
        } catch (err) {
            req.flash('msg', '帳密忘記了嗎')
            res.redirect('/')
        }

        
    },
    logout: (req, res) => {
        req.session.login = false
        res.redirect('/')

    }
}