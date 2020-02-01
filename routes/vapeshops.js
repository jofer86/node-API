const express = require('express');
const router = express.Router();

// GET ALL
router.get('/', (req, res) => {
  res
    .status(200)
    .json({ succes: true, msg: 'Show all vapeshops' });
});

// GET
router.get('/:id', (req, res) => {
  res
    .status(200)
    .json({ succes: true, msg: `Get vapeshop ${req.params.id}` });
});

// PUT
router.put('/:id', (req, res) => {
  res
    .status(200)
    .json({ succes: true, msg: `Update vapeshop ${req.params.id}` });
});


// POST
router.post('/', (req, res) => {
  res
    .status(200)
    .json({ succes: true, msg: 'Create new vapeshops' });
});

// DELETE
router.delete('/:id', (req, res) => {
  res
    .status(200)
    .json({ succes: true, msg: `Delete vapeshop ${req.params.id}` });
});


module.exports = router;