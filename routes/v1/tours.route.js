const express = require('express');


const router = express.Router();

const toursController = require("../../controllers/tours.controller");
//http://localhost:5000/api/v1/tours?price[gt]=0&sort=name,visitedCount&page=1&limit=50&fields=name
router.route('/')
    /**
       * @api {get} /
       * @apiDescription Get all data
       * @apiPermission all
       */
    .get(toursController.getTours)
    /**
   * @api {post}
   * @apiDescription Sava data
   * @apiPermission all
   */
    .post(toursController.createTours)



router.route('/trending')
    /**
      * @api {get} /trending
      * @apiDescription Get data by mostviewed tour
      * @apiPermission all
      */
    .get(toursController.trendingTours)

router.route('/cheapest')
    /**
       * @api {get} /cheapest
       * @apiDescription Get data by cheapest price tour
       * @apiPermission all
       */
    .get(toursController.cheapestTours)

router.route('/:id')
    /**
       * @api {get} /:id
       * @apiDescription Get data by id parameter
       * @apiPermission all
       */
    .get(toursController.getToursById)
    /**
   * @api {patch} /:id
   * @apiDescription Updata data by id parameter
   * @apiPermission all
   */
    .patch(toursController.updateToursById)




module.exports = router;

































