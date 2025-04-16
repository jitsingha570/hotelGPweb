const asyncHandler = require("express-async-handler");
const RoomBooking = require("../models/roomBookingModel.js");

// @desc    Get all room bookings
// @route   GET /api/roombooking
// @access  Public
const getbookings = asyncHandler(async (req, res) => {
    const bookings = await RoomBooking.find().sort({ createdAt: -1 });

    res.json(bookings);
});
// @desc    Get single room booking
// @route   GET /api/roombooking/:id
// @access  Public
const getbooking = asyncHandler(async (req, res) => {
    const booking = await RoomBooking.findById(req.params.id);
    if (!booking) {
        res.status(404);
        throw new Error(`Invalid booking ID: ${req.params.id}`);
       
    } 
    res.status(200).json(booking);
});
// @desc    Create a new room booking
// @route   POST /api/roombooking
// @access  Public
const postbooking = asyncHandler(async (req, res) => {
    console.log("Creating booking", req.body);
    const { name, email, phone, guests, checkindate, checkoutdate, roomtype } = req.body;

    if (!name || !email || !phone || !guests || !checkindate || !checkoutdate || !roomtype) {
        res.status(400);
        throw new Error("Please fill all the fields");
    }

    const createdBooking = await RoomBooking.create({
        name,
        email,
        phone,
        guests,
        checkindate,
        checkoutdate,
        roomtype,
    });

    res.status(201).json(createdBooking);
});

// @desc    delete a room booking

// @route   DELETE /api/roombooking/:id
// @access  Public
const deletebooking = asyncHandler(async (req, res) => {
    const booking = await RoomBooking.findById(req.params.id);
    if (!booking) {
        res.status(404);
        throw new Error(`Invalid booking ID: ${req.params.id}`);
    }
    await RoomBooking.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Booking removed" });
});
module.exports = {
    getbookings,
    getbooking,
    postbooking,
    deletebooking,
};