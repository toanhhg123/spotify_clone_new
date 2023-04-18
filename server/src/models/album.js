const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  auth: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
  },
  musics: [{ type: mongoose.Schema.Types.ObjectId, ref: "Music", default: [] }],
  users: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Account", default: [] },
  ],
});

const Album = mongoose.model("Album", albumSchema);

module.exports = Album;
