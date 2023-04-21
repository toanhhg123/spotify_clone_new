const Account = require("../models/Account");
const expressAsyncHandler = require("express-async-handler");
const Album = require("../models/album");
const createHttpError = require("http-errors");

const create = expressAsyncHandler(async (req, res) => {
  const { _id } = req.user;
  const album = await Album.create({ ...req.body, auth: _id });
  return res.json({
    status: "success",
    data: album,
    message: "query album success",
  });
});

const getAll = expressAsyncHandler(async (req, res) => {
  const { _id } = req.user;
  const albums = await Album.find({ auth: _id }).populate("musics");
  return res.json({
    status: "success",
    data: albums,
    message: "query album success",
  });
});

const getAllShare = expressAsyncHandler(async (req, res) => {
  const { _id } = req.user;
  const albums = await Album.find({
    $or: [{ users: { $in: _id } }],
  });
  return res.json({
    status: "success",
    data: albums,
    message: "query album success",
  });
});

//643e0845fc3e907a1081a2da

const share = expressAsyncHandler(async (req, res) => {
  const album = await Album.findById(req.params.id);
  if (!album) throw createHttpError[404]("alumn not found");
  album.users = album.users.some((x) => x.toString() === req.body.userId)
    ? album.users
    : [...album.users, req.body.userId];
  await album.save();
  return res.json({
    status: "success",
    data: album,
    message: "query album success",
  });
});

const remove = expressAsyncHandler(async (req, res) => {
  const albums = await Album.findByIdAndDelete(req.params.id);
  return res.json({
    status: "success",
    data: albums,
    message: "query album success",
  });
});

const details = expressAsyncHandler(async (req, res) => {
  const albums = await Album.findById(req.params.id).populate("musics");
  return res.json({
    status: "success",
    data: albums,
    message: "query album success",
  });
});

const addMusic = expressAsyncHandler(async (req, res) => {
  const album = await Album.findById(req.params.id);
  if (!album) throw new Error("not found album");
  album.musics = album.musics.some((x) => x.toString() === req.body.musicId)
    ? album.musics
    : [...album.musics, req.body.musicId];
  await album.save();
  return res.json({
    status: "success",
    data: album,
    message: "query album success",
  });
});

module.exports = {
  create,
  getAll,
  getAllShare,
  remove,
  share,
  details,
  addMusic,
};
