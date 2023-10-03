const { Schema } = require("mongoose");

const characterSchema = new Schema({
  _id: String,
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  homeworld: { type: String, ref: "Planet" },
  films: [{ type: String, ref: "Film" }],
});

characterSchema.statics.getAll = function () {
  return this.find()
    .populate("homeworld")
    .populate("films")
    .exec()
    .then(characters => {
      return characters;
    })
    .catch(err => {
      throw err; 
    });
};

characterSchema.statics.getById = function (id) {
  return this.findById(id)
    .populate("homeworld")
    .populate("films")
    .exec()
    .then(character => {
      return character;
    })
    .catch(err => {
      throw err; 
    });
};

characterSchema.statics.createCharacter = function (character) {
  return this.create(character)
    .then(character => {
      return character;
    })
    .catch(err => {
      throw err; 
    });
};

characterSchema.statics.update2 = function (id, character) {
  return this.findByIdAndUpdate(
    id,
    character,
    { new: true }
  )
    .then(character => {
      return character;
    })
    .catch(err => {
      throw err; 
    });
};

characterSchema.statics.delete2 = function (id) {
  return this.findByIdAndDelete(id)
    .then(character => {
      return character;
    })
    .catch(err => {
      throw err; 
    });
};


module.exports = characterSchema;
