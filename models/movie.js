var mongoose = require('mongoose'); 
let movieSchema = mongoose.Schema(
    {
        backdrop_path: {type: String, required: true},
        id: {type: Number, required: true},
        title: {type: String, required: true},
        original_title: {type: String, required: true},
        overview: {type: String, required: true},
        poster_path: {type: String, required: true},
        media_type: {type: String, required: true},
        adult: {type: Boolean, required: true},
        original_language: {type: String, required: true},
        genre_ids: {type: [Number], required: true},
        popularity: {type: Number, required: true},
        release_date: {type: Date, required: true},
        video: {type: Boolean, required: true},
        vote_average: {type: Number, required: true},
        vote_count: {type: Number, required: true},
      }
);

module.exports = mongoose.model('Movies', movieSchema)
