
const ToursPackage = require('../models/ToursPackage');



exports.getToursServices = async (filters, queries) => {


    const data = await ToursPackage.find(filters)
        .skip(queries.skip).limit(queries.limit)
        .sort(queries.sort)
        .select(queries.fields);


    const totalDocCount = await ToursPackage.countDocuments();
    const pageCount = Math.ceil(totalDocCount / queries.limit);


    return { data, totalDocCount, pageCount };
}

exports.trendingToursService = async (filters, queries) => {


    const data = await ToursPackage.find(filters)
        .sort({ visitedCount: -1 })
        .skip(queries.skip).limit(queries.limit)
        .select(queries.fields);


    const totalDocCount = await ToursPackage.countDocuments();
    const pageCount = Math.ceil(totalDocCount / queries.limit);


    return { data, totalDocCount, pageCount };
}

exports.cheapestToursService = async (filters, queries) => {


    const data = await ToursPackage.find(filters)
        .sort([['price', 1], ['visitedCount', -1]])
        .skip(queries.skip).limit(queries.limit)
        .select(queries.fields);


    const totalDocCount = await ToursPackage.countDocuments();
    const pageCount = Math.ceil(totalDocCount / queries.limit);


    return { data, totalDocCount, pageCount };
}


exports.createToursServices = async (data) => {


    const result = await ToursPackage.create(data);

    return result;

    // const result = await ToursPackage.create(data, { runValidators: true });

    // const newTours = await ToursPackage(data);
    // console.log("newTours: ", newTours);
    // const result = await newTours.save();
    // console.log("service result: ", result);
    // return result;


    // const newTour = new ToursPackage(data)
    // const result = await newTour.save()
    // return result
}

exports.getToursByIdServices = async (id) => {

    const filter = { _id: id };
    const update = { $inc: { visitedCount: 1 } }

    const data = await ToursPackage.findOneAndUpdate(filter, update, {
        new: true
    });

    return data;

}
exports.updateToursByIdService = async (id, data) => {

    // const result = await ToursPackage.updateOne({ _id: id }, { $set: data }, { runValidators: true });
    const result = await ToursPackage.updateOne({ _id: id }, { $set: data });

    return result;

}



























