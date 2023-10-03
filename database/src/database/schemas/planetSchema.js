const { Schema } = require("mongoose");

const planetSchema = new Schema({
  _id: String,
  name: String,
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  residents: [{ type: String, ref: "Character" }],
  films: [[{ type: String, ref: "Film" }]],
});

planetSchema.statics.getAll = function () {
  return this.find()
    .populate("residents")
    .populate("films")
    .exec()
    .then(planets => {
      return planets;
    })
    .catch(err => {
      throw err;
    });
};

planetSchema.statics.getById = function (id) {
  return this.findById(id)
    .populate("residents")
    .populate("films")
    .exec()
    .then(planet => {
      return planet;
    })
    .catch(err => {
      throw err;
    });
};

planetSchema.statics.createPlanet = function (planet) {
  return this.create(planet)
    .then(planet => {
      return planet;
    })
    .catch(err => {
      throw err;
    });
};

planetSchema.statics.update2 = function (id, planet) {
  return this.findByIdAndUpdate(id, planet, { new: true })
    .then(planet => {
      return planet;
    })
    .catch(err => {
      throw err;
    });
};

planetSchema.statics.delete2 = function (id) {
  return this.findByIdAndDelete(id)
    .then(planet => {
      return planet;
    })
    .catch(err => {
      throw err;
    });
};


module.exports = planetSchema;
