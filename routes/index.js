var express = require('express');
var router = express.Router();
const resturantController = require('../controllers/resturantController');
/* GET home page. */
router.get('/', resturantController.viewAll);

router.get('/edit/:id', resturantController.renderEditForm);
router.post('/edit/:id', resturantController.updateRestaurant);
router.get('/delete/:id', resturantController.deleteRestaurant);
router.get('/add', resturantController.renderAddForm);
module.exports = router;
