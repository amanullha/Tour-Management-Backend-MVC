
const _ = require('underscore');
const { createToursServices, getToursServices, updateToursByIdService, getToursByIdServices, trendingToursService, cheapestToursService } = require('../services/tours.services')


exports.getTours = async (req, res, next) => {


    try {
        let filters = { ...req.query };

        const excludeFields = ['sort', 'page', 'limit', 'fields'];

        excludeFields.forEach(field => delete filters[field]);

        let filtersString = JSON.stringify(filters);

        filtersString = filtersString.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);

        filters = JSON.parse(filtersString);


        const queries = {};


        // set default page and limit 

        let { page = 1, limit = 5 } = req.query;
        page = Number(page);
        limit = Number(limit);

        const skip = (page - 1) * limit;
        queries.skip = skip;
        queries.limit = limit;


        if (req.query.fields) {

            const fields = req.query.fields.split(',').join(" ");
            queries.fields = fields;
        }

        if (req.query.sort) {

            const sort = req.query.sort.split(',').join(" ");
            queries.sort = sort;
        }


        const data = await getToursServices(filters, queries);

        if (!data.data.length) {

            res.status(400).send({
                success: false,
                message: "Can't get the data!!",

            })
            return;
        }

        res.status(200).send({
            success: true,
            message: "Data get successfully!!",
            data: data
        })

    } catch (error) {
        res.status(400).send({

            success: false,
            message: "Can't get the data!!",
            error: error.message

        })
    }


}

exports.trendingTours = async (req, res, next) => {

    console.log("tra");
    try {
        let filters = { ...req.query };

        const excludeFields = ['sort', 'page', 'limit', 'fields'];

        excludeFields.forEach(field => delete filters[field]);

        let filtersString = JSON.stringify(filters);

        filtersString = filtersString.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);

        filters = JSON.parse(filtersString);


        const queries = {};


        // set default page and limit 

        let { page = 1, limit = 5 } = req.query;
        page = Number(page);
        limit = Number(limit);

        const skip = (page - 1) * limit;
        queries.skip = skip;
        queries.limit = limit;


        if (req.query.fields) {

            const fields = req.query.fields.split(',').join(" ");
            queries.fields = fields;
        }

        if (req.query.sort) {

            const sort = req.query.sort.split(',').join(" ");
            queries.sort = sort;
        }


        const data = await trendingToursService(filters, queries);

        if (!data.data.length) {

            res.status(400).send({
                success: false,
                message: "Can't get the data!!",

            })
            return;
        }

        res.status(200).send({
            success: true,
            message: "Data get successfully!!",
            data: data
        })

    } catch (error) {
        res.status(400).send({

            success: false,
            message: "Can't get the data!!",
            error: error.message

        })
    }


}

exports.cheapestTours = async (req, res, next) => {

    console.log("che");
    try {
        let filters = { ...req.query };

        const excludeFields = ['sort', 'page', 'limit', 'fields'];

        excludeFields.forEach(field => delete filters[field]);

        let filtersString = JSON.stringify(filters);

        filtersString = filtersString.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);

        filters = JSON.parse(filtersString);


        const queries = {};


        // set default page and limit 

        let { page = 1, limit = 5 } = req.query;
        page = Number(page);
        limit = Number(limit);

        const skip = (page - 1) * limit;
        queries.skip = skip;
        queries.limit = limit;


        if (req.query.fields) {

            const fields = req.query.fields.split(',').join(" ");
            queries.fields = fields;
        }

        if (req.query.sort) {

            const sort = req.query.sort.split(',').join(" ");
            queries.sort = sort;
        }


        const data = await cheapestToursService(filters, queries);

        if (!data.data.length) {

            res.status(400).send({
                success: false,
                message: "Can't get the data!!",

            })
            return;
        }

        res.status(200).send({
            success: true,
            message: "Data get successfully!!",
            data: data
        })

    } catch (error) {
        res.status(400).send({

            success: false,
            message: "Can't get the data!!",
            error: error.message

        })
    }


}
exports.createTours = async (req, res, next) => {

    console.log("createTours");
    try {

        const data = req.body;

        const result = await createToursServices(data);

        // result.logger();


        console.log("controller result: ", result);

        res.status(200).send({
            success: true,
            message: "Data inserted successfully!!",
            data: result
        })

    } catch (error) {
        res.status(400).send({

            success: false,
            error: error.message

        })
    }


}

exports.getToursById = async (req, res, next) => {


    try {
        const { id } = req.params;

        const data = await getToursByIdServices(id);

        if (_.isEmpty(data)) {

            res.status(400).send({
                success: false,
                message: "Can't get the data!!",

            })

            return;
        }

        res.status(200).send({
            success: true,
            message: "Data get successfully!!",
            data: data
        })

    } catch (error) {
        res.status(400).send({

            success: false,
            message: "Can't get the data!!",
            error: error.message

        })
    }
}



exports.updateToursById = async (req, res, next) => {


    try {

        const { id } = req.params;
        const data = { ...req.body };


        const result = await updateToursByIdService(id, data);

        res.status(200).json({
            success: true,
            message: "Data Updated successfully",
            data: result,
        })


    } catch (error) {
        res.status(400).send({

            success: false,
            message: "Can't get the data!!",
            error: error.message

        })
    }
}






















