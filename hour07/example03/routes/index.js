
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.list = function(req, res) {
    res.render('list.jade', { title: 'List'})
};