var express = require('express');
var router = express.Router();
const resturantController = require('../controllers/resturantController');
/* GET home page. */
router.get('/', resturantController.viewAll);

router.get('/edit/:id', resturantController.renderEditForm);
router.post('/edit/:id', resturantController.updateRestaurant);

module.exports = router;
