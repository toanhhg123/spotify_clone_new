const { Router } = require("express");
const {
  remove,
  getAll,
  create,
  getAllShare,
  share,
} = require("../controllers/albumController");
const authenticateJWT = require("../middlewares/authMiddleware");

const router = Router();

router.post("/", authenticateJWT(), create);
router.patch("/:id", authenticateJWT(), share);

router.get("/shared", authenticateJWT(), getAllShare);
router.get("/", authenticateJWT(), getAll);
router.delete("/:id", authenticateJWT(), remove);

module.exports = router;
