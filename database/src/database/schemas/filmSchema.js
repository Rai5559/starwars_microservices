const { Schema } = require("mongoose");

const filmSchema = new Schema({
  _id: String,
  title: String,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: String,
  characters: [{ type: String, ref: "Character" }],
  planets: [{ type: String, ref: "Planet" }],
});

filmSchema.statics.getAll = function () {
  return this.find()
    .populate("characters")
    .populate("planets")
    .exec()
    .then(films => {
      return films;
    })
    .catch(err => {
      throw err;
    });
};

filmSchema.statics.getById = function (id) {
  return this.findById(id)
    .populate("characters")
    .populate("planets")
    .exec()
    .then(film => {
      return film;
    })
    .catch(err => {
      throw err;
    });
};

filmSchema.statics.createFilm = function (film) {
  return this.create(film)
    .then(film => {
      return film;
    })
    .catch(err => {
      throw err;
    });
};

filmSchema.statics.updateFilm = function (id, film) {
  return this.findByIdAndUpdate(id, film, { new: true })
    .then(film => {
      return film;
    })
    .catch(err => {
      throw err;
    });
};

filmSchema.statics.deleteFilm = function (id) {
  return this.findByIdAndDelete(id)
    .then(film => {
      return film;
    })
    .catch(err => {
      throw err;
    });
};


module.exports = filmSchema;
