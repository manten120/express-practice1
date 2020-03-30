var express = require('express');
var router = express.Router();

const itemList = require('../itemlist').itemList;

/* GET home page. */
router.get('/', function(req, res, next) {
  data = {
    title: '〇〇商店',
    itemList: itemList,
    searchedItemName: '',
    matchedItemList: ''
  }
  res.render('index', data);
});

/* POST home page. */
router.post('/', function(req, res, next) {
  const searchedItemName = req.body['search'];

  const matchedItemList = itemList.filter((itemObj) => {
    return itemObj.name.includes(searchedItemName);
  })


  console.log(matchedItemList);

  data = {
    title: '〇〇商店',
    itemList: itemList,
    searchedItemName: searchedItemName,
    matchedItemList: matchedItemList
  }
  res.render('index', data);
});

module.exports = router;