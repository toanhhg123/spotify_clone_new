const { Router } = require("express");
const {
  createPayment,
  returnUrlPayment,
} = require("../controllers/vnpayController");
const router = Router();

router.post("/createurl", createPayment);
router.get("/vnpay_return", returnUrlPayment);

module.exports = router;
