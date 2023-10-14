const mongoose = require("mongoose");
const { MONGO_DB } = require("../config/config");

module.exports = () => {
  return mongoose.connect(MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
