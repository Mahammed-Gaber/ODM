const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({

    name: String,
    rate: Number,
    description: String,
    image: String,
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Category'
    }


})


const Movie = mongoose.model("Movie", movieSchema);
Movie.createIndexes({ name: 1 });
module.exports = Movie;