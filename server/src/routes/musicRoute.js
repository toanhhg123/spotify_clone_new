const { Router } = require("express");
const {
  upload,
  deleteMusic,
  getAll,
  changeLike,
  query,
} = require("../controllers/musicController");
const { uploadImg } = require("../config/multer");
const authenticateJWT = require("../middlewares/authMiddleware");

const router = Router();
router.patch("/changelikes/:id", authenticateJWT(), changeLike);

router.get("/query", query);
router.get("/", getAll);

router.post(
  "/",
  uploadImg.fields([{ name: "img" }, { name: "audio" }]),
  upload
);

router.delete("/:id", deleteMusic);

module.exports = router;
