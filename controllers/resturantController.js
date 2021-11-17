const {Restaurant} = require('../models')
const categories = ['Italian', 'Fast Food'];
module.exports.viewAll = async function(req, res, next) {
    const restaurants = await Restaurant.findAll();
    res.render('index', {restaurants});
}


module.exports.renderEditForm = async function(req,res,next) {
    const restaurant = await Restaurant.findByPk(
        res.params.id
    );
    res.render('edit', {restaurant, categories});
}

module.exports.updateRestaurant =  async function(req,res) {
    await Restaurant.update(
        {
            name: req.body.name,
            categorey: req.body.categorey,
            rating: req.body.rating,
            image: req.body.image,
            description: req.body.description
        },
        {
            where:
                {
                    id: req.params.id
                }
        }
    );
    res.redirect('/');
}