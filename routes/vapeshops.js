const express = require('express');
const {
  getVapeshops,
  getVapeshop,
  createVapeshop,
  updateVapeshop,
  deleteVapeshop
} = require('../controllers/vapeshops');

const router = express.Router();

router
  .route('/')
  .get(getVapeshops)
  .post(createVapeshop)

router
  .route('/:id')
  .get(getVapeshop)
  .put(updateVapeshop)
  .delete(deleteVapeshop)



module.exports = router;