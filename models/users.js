// ┬─┬ノ( º _ ºノ)
// (╯°□°)╯︵ ┻━┻
const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  firstname: String,
  username: String,
  password: String,
  token: String,
  birthDate: Date
});

const Users = mongoose.model("users", usersSchema);

module.exports = Users;
