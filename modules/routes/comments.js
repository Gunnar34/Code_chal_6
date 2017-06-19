var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/comments');

var commentSchema = new mongoose.Schema({
	"user" : String,
  "comment" : String
});

var commentModel = mongoose.model('comments', commentSchema);

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/', function(req, res) {
  console.log('get listings db');
  commentModel.find().then(function(data) {
    res.send(data);
  });
});

router.post('/', function(req, res) {
  console.log('db post: ', req.body);
  var recordToAdd = {
    user: req.body.user,
    comment: req.body.comment
  };

  var newRecord = commentModel(recordToAdd);

  newRecord.save();
  res.send('success');
});

module.exports = router;
