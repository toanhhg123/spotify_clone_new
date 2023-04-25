const mongoose = require("mongoose");

const playListSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  name: {
    type: String,
    required: true,
  },
  auth: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
  },
  musics: [{ type: mongoose.Schema.Types.ObjectId, ref: "Music", default: [] }],
});

const PlayList = mongoose.model("PlayList", playListSchema);

module.exports = PlayList;
