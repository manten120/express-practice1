var express = require('express');
var router = express.Router();

const itemList = require('../itemlist').itemList;

/* GET home page. */
router.get('/', function(req, res, next) {
  data = {
    title: '〇〇商店',
    itemList: itemList,
  }
  res.render('index', data);
});

module.exports = router;