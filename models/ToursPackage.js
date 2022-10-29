const mongoose = require('mongoose')
const _ = require('underscore')

// 1. Schema Design 

const toursPackageSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please provide a name for this Tour package'],
        trim: true,// remove font and back space 
        unique: [true, "Name must be unique"],
        minLength: [3, "Name must be at least 3 characters"],
        maxLength: [100, "Name is too large"],
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price can't be negative"]
    },
    description: {
        type: String,
        require: [true, "Please provide description of the place"]
    },
    subscription: {
        type: String,
        default: "Free",
        enum: {
            values: ['Free', 'Premium']
        }
    },

    status: {
        type: String,
        default: 'Available',
        enum: {
            values: ['Available', 'Booked'],
            message: "Set the status"
        }

    },
    image: {
        type: String,
        required: true,

    },
    visitedCount: {
        type: Number,
        default: 0
    }






}, { timestamps: true })


// Mongoose middleware 

toursPackageSchema.pre('save', function (next) {

    console.log("before saving data");

    next();

})

toursPackageSchema.post('save', function (doc, next) {

    console.log("After saving data");

    next();
})


// Mongoose Instance Methods

toursPackageSchema.methods.logger = function () {

    console.log(`Data saved for ${this.name} . from logger(Mongoose instance methods)`);
}



// Model 


const ToursPackage = mongoose.model('ToursPackage', toursPackageSchema);

module.exports = ToursPackage;
















