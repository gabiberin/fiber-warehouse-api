const express = require('express');
const router = express.Router();
const createWarehouse = require('../resources/lidl-warehouse');

const lidlWarehouse = createWarehouse();

router.post('/allocateCell', function(req, res, next) {
  const productId = req.query.productId;
  const quantity = +req.query.quantity;
  
  const cell = lidlWarehouse.allocateCell(productId, quantity);
  if (cell) {
    res.json({
      foundCell: true,
      cell
    });
  } else {
    res.json({
      foundCell: false
    });
  }
});

module.exports = router;
