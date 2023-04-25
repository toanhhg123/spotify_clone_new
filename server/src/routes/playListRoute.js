const { Router } = require("express");
const {
  remove,
  getAll,
  create,
  addMusic,
  details,
} = require("../controllers/PlayListController");
const authenticateJWT = require("../middlewares/authMiddleware");

const router = Router();

router.post("/", authenticateJWT(), create);
router.get("/:id", authenticateJWT(), details);
router.get("/", authenticateJWT(), getAll);
router.delete("/:id", authenticateJWT(), remove);
router.patch("/:id", authenticateJWT(), addMusic);
module.exports = router;
