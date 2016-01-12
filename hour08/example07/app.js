/**
 * Module dependencies.
 */

var express = require('express'),
  routes = require('./routes'),
  http = require('http'),
  path = require('path'),
  mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/todo_development');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Task = new Schema({
  task: String
});

var Task = mongoose.model('Task', Task);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/tasks', function(req, res){
  Task.find({}, function (err, docs) {
    res.render('tasks/index', {
      title: 'Todos index view',
      docs: docs
    });
  });
});

app.get('/tasks/new', function(req, res){
  res.render('tasks/new.jade', {
    title: 'New Task'
  });
});

app.post('/tasks', function(req, res){
    console.log(req.body.task);
  var task = new Task({task: req.body.task});
  task.save(function (err) {
    if (!err) {
      res.redirect('/tasks');
    }
    else {
        console.log(err);
      res.redirect('/tasks/new');
    }
  });
});

//app.get('/tasks/:id/edit', function(req, res){
//    Task.findById(req.params.id, function (err, doc){
//        //console.log(doc);
//        res.render('tasks/edit', {
//            title: 'Edit Task View',
//            task: doc
//        });
//    });
//});
////更新任务
//app.put('/tasks/:id', function(req, res){
//    Task.findById(req.params.id, function (err, doc){
//        doc.updated_at = new Date();
//        doc.task = req.body.task.task;
//        doc.save(function(err) {
//            if (!err){
//                res.redirect('/tasks');
//            }
//            else {
//                console.err(err);
//            }
//        });
//    });
//});
////删除任务
//app.del('/tasks/:id', function(req, res) {
//    Task.findById(req.params.id, function(err, doc) {
//        console.log(doc);
//        if (!doc) return next(new NotFound('Document not found'));
//        doc.remove(function() {
//            res.redirect('/tasks');
//        });
//    });
//});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
