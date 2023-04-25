const Account = require("../models/Account");
const expressAsyncHandler = require("express-async-handler");
const PlayList = require("../models/PlayList");
const createHttpError = require("http-errors");

const create = expressAsyncHandler(async (req, res) => {
  const { _id } = req.user;
  const playlist = await PlayList.create({ ...req.body, auth: _id });
  return res.json({
    status: "success",
    data: playlist,
    message: "query playlist success",
  });
});

const getAll = expressAsyncHandler(async (req, res) => {
  const { _id } = req.user;
  const playlists = await PlayList.find({ auth: _id }).populate("musics");
  return res.json({
    status: "success",
    data: playlists,
    message: "query playlist success",
  });
});
const details = expressAsyncHandler(async (req, res) => {
  const playlists = await PlayList.findById(req.params.id).populate("musics");
  return res.json({
    status: "success",
    data: playlists,
    message: "query playlist success",
  });
});

const remove = expressAsyncHandler(async (req, res) => {
  const playList = await PlayList.findByIdAndDelete(req.params.id);
  return res.json({
    status: "success",
    data: playList,
    message: "query playlist success",
  });
});
const addMusic = expressAsyncHandler(async (req, res) => {
  const playList = await PlayList.findById(req.params.id);
  if (!playList) throw new Error("not found playList");
  playList.musics = playList.musics.some(
    (x) => x.toString() === req.body.musicId
  )
    ? playList.musics
    : [...playList.musics, req.body.musicId];
  await playList.save();
  return res.json({
    status: "success",
    data: playList,
    message: "query album success",
  });
});
module.exports = {
  create,
  getAll,
  remove,
  addMusic,
  details,
};
