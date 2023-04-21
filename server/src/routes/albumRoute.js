const { Router } = require("express");
const {
  remove,
  getAll,
  create,
  getAllShare,
  share,
  details,
  addMusic,
} = require("../controllers/albumController");
const authenticateJWT = require("../middlewares/authMiddleware");

const router = Router();

router.post("/", authenticateJWT(), create);
router.patch("/addmusic/:id", authenticateJWT(), addMusic);
router.patch("/:id", authenticateJWT(), share);

router.get("/shared", authenticateJWT(), getAllShare);
router.get("/:id", authenticateJWT(), details);
router.get("/", authenticateJWT(), getAll);
router.delete("/:id", authenticateJWT(), remove);

module.exports = router;
