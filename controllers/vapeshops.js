// @desc        Get all vapeshops
// @route       GET /api/v1/vapeshops
// @access      Public
exports.getVapeshops = (req, res, next) => {
  res
    .status(200)
    .json({ succes: true, msg: 'Show all vapeshops' });
}

// @desc        Get single vapeshop
// @route       GET /api/v1 / vapeshops /: id
// @access      Public
exports.getVapeshop = (req, res, next) => {
  res
    .status(200)
    .json({ succes: true, msg: `Get vapeshop ${req.params.id}` });
}

// @desc        Create vapeshop
// @route       PUT /api/v1/vapeshops/:id
// @access      Private
exports.updateVapeshop = (req, res, next) => {
  res
    .status(200)
    .json({ succes: true, msg: `Update vapeshop ${req.params.id}` });
}

// @desc        Update vapeshop
// @route       POST /api/v1/vapeshops/:id
// @access      Private
exports.createVapeshop = (req, res, next) => {
  res
    .status(200)
    .json({ succes: true, msg: 'Create new vapeshop' });
}

// @desc        Delete vapeshop
// @route       DELETE /api/v1/vapeshops/:id
// @access      Private
exports.deleteVapeshop = (req, res, next) => {
  res
    .status(200)
    .json({ succes: true, msg: `Delete vapeshop ${req.params.id}` });
}
