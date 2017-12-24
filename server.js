const express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();
const MongoClient= require('mongodb').MongoClient;
const mongoURL='mongodb://localhost:27017/techstitution';
const objectId = require('mongodb').ObjectId;

MongoClient.connect(mongoURL, function(err, database){
    
    if(err){
        console.log(err);
    }else{
    	console.log('MongoDB Connected!');
	    	}
    qkmk=database.collection('qkmk');
});

//use static fils
app.use(express.static(__dirname + '/public'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.get('/', function(req,res){
	var data = " test"
	res.render('index', {title: data});
});


app.get('/show', function(req, res){
	var title = "Lista me te dhena";
	qkmk.find({}).toArray(function(err, docs){
		if(err){
			console.log(err);
		}
		res.render('show', {title: title, docs:docs});
	});
});


app.post('/add', function(req,res){
	var data = req.body;
	qkmk.insert(data, function(err, result){
		if(err){
			console.log(err);
	}
	res.redirect('/');
});

});


app.get('/edit/:id', function(req,res){
	var title = "Edito te dhenat";
	var id = req.params.id;
	qkmk.findOne({_id: objectId(id)}, function(err, result){
		if(err){
			console.log(err);
		}
	res.render('edit', {title: title, doc:result });
	});
});

app.post('/update/:id', function(req,res){
	var data = req.body;
	var id = objectId(req.params.id);
	qkmk.updateOne({_id: id},
		{ $set: data },
		function(err, result) {
			if(err){
				console.log(err);

			}
	res.redirect('/');
});
});

app.get('/delete/:id', function(req,res){
	res.redirect('/');
});

app.get('/exercise', function(req,res){
	var dataJson = {
		"id": 1,
		"project": "techstitution"
	};
	var projects  = [{ id: 1, name:'techstitution'},
	  {id: 2, name:'techexperience'},
	  {id: 3, name:'techforpolicy'},
	];
	res.render('exercise', {data: dataJson,projects: projects});
});


app.get('*', function(req,res){
	res.send("404 NOT FOUND");
});

app.listen(3002,function(){
	console.log('Navigate to http.//localhost:3002');
});