var express = require('express');
var router = express.Router();

const itemList = require('../itemlist').itemList;



/* GET item page. */
router.get('/', function(req, res, next) {

  const itemId = parseInt(req.query.itemId);

  const itemName = itemList[itemId].name
  const itemPrice = itemList[itemId].price

  const data = {
    title: '商品詳細ページ',
    itemName: itemName,
    itemPrice: itemPrice,
  };

  res.render('item', data);
});

module.exports = router;
