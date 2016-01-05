var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res) {
    res.send('the content for about');
});
router.get('/contact', function(req, res) {
    res.send('the content for contact');
});
router.get('/products', function(req, res) {
    res.send('the content for products');
});

router.get('/user/:id', function(req, res) {
    var user = {
        1 : {
            first_name: 'liu',
            last_name: 'wei',
            age: 25,
            address: 'beijing'
        },
        2 : {
            first_name: 'wang',
            last_name: 'dong',
            age: 25,
            address: 'hefei'
        }
    };

    res.render('list.jade', { user: user[req.params.id] });
});

module.exports = router;
