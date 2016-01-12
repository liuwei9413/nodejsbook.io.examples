//mongoose连接
var mongoose = require("mongoose");
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/mongoose_test2');

//连接错误
db.on('error', function(err) {
    console.log(err);
});
db.once('open',function(){
    //一次打开记录
    //console.log('打开')
});

//定义一个 Schema
var PersonSchema = new mongoose.Schema({
    name: String    //定义一个属性name,类型为String
});

//为Schema模型追加实例方法
PersonSchema.methods.speak = function() {
    console.log('我的名字叫：'+this.name)
};

//将该Schema发布为Model
var PersonModel = db.model('Person', PersonSchema);

//用Model创建Entity
var personEntity = new PersonModel({
    name: 'liuwei'
});

//personEntity.speak();
//存储
personEntity.save(function(err) {
    console.log(err);
});

//使用Model增加一条数据
/*PersonModel.create({name: 'fengge'}, function() {
    console.log('使用model增加一条数据成功')
});*/

//查询
PersonModel.find({},function(err, data) {
    //console.log(err);
    console.log(data);
});


