var express = require('express');
var router = express.Router();

const itemList = require('../itemlist').itemList;

router.get('/', function(req, res, next) {
  let searchWord = req.query.searchWord
  if (searchWord) {
    const matchedItemList = itemList.filter((itemObj) => {
      return itemObj.name.includes(searchWord);
    })
    res.json(matchedItemList);
  } else {
    const matchedItemList = [];
    res.json(matchedItemList);
  }
});

module.exports = router;