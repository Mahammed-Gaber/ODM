const Movie = require('../models/Movie');


const createMovie = (_name, _description, _rate, _img, _category) => {
    try {
        let data = Movie.create({
            name: _name,
            description: _description,
            rate: _rate,
            image: _img,
            category: _category
        })

        if (data) {
            console.log("ok");
        }
    }
    catch (e) {

    }


}

const filterMovie = (_name) => {

    try {
        let data = Movie.find({ name: _name });
        if (data) {
            console.log(data);
        }
        else {
            console.log("movie do not found");
        }
    }
    catch (e) {
        console.log(e);
    }

}

module.exports = { createMovie, filterMovie };