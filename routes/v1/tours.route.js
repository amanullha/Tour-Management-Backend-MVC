const express = require('express');


const router = express.Router();

const toursController = require("../../controllers/tours.controller");
//http://localhost:5000/api/v1/tours?price[gt]=0&sort=name,visitedCount&page=1&limit=50&fields=name
router.route('/')
    .get(toursController.getTours)
    .post(toursController.createTours)



router.route('/trending')
    .get(toursController.trendingTours)

router.route('/cheapest')
    .get(toursController.cheapestTours)

router.route('/:id')
    .get(toursController.getToursById)
    .patch(toursController.updateToursById)




module.exports = router;

































