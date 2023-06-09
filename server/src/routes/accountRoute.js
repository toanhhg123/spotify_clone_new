const { Router } = require("express");
const {
  getAllUser,
  createAccount,
  updateUser,
  deleteUser,
  findOne,
} = require("../controllers/accountController");
const router = Router();

router.get("/:key/:value", findOne);

router.get("/", getAllUser);
router.post("/", createAccount);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
