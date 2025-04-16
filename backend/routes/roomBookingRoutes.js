const express = require("express");
const router = express.Router();
const { getbookings, getbooking, postbooking , deletebooking} = require("../controllers/roomBookingController");

router.route("/").get(getbookings).post(postbooking);
router.route("/:id").get(getbooking).delete(deletebooking);

module.exports = router;