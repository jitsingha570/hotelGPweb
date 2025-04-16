const asyncHandler = require("express-async-handler");
const Room = require("../models/roomModel.js");



// @desc    Get all rooms
// @route   GET /api/rooms
// @access  Public
const getRooms =  asyncHandler (async (req, res) => {
    const rooms = await Room.find();
    res.status(200).json(rooms);
});

// @desc    Get single room by id
// @route   GET /api/rooms/:id
// @access  Public
const getRoom =  asyncHandler (async (req, res) => {
    const room = await Room.findById(req.params.id);
    if (!room) {
        res.status(404);
        throw new Error("Room not found");
    }
    res.status(200).json(room);
});

// @desc    Create a new room
// @route   POST /api/rooms
// @access  Private/Admin
const createRoom =  asyncHandler (async (req, res) => {
    console.log("Creating room", req.body);
    const { roomname, roomdescription, roomprice, roomdiscount } = req.body;
   if(!roomname || !roomdescription || !roomprice || !roomdiscount){
        res.status(400);
        throw new Error("Please fill all the fields");
    }
    const createdRoom = await Room.create({
        roomname,
        roomdescription,
        roomprice,
        roomdiscount,
    });
    res.status(201).json(createdRoom);
});

// @desc    Update a room
// @route   PUT /api/rooms/:id
// @access  Private/Admin

const updateRoom =  asyncHandler (async (req, res) => {
    const { roomname, roomdescription, roomprice, roomdiscount } = req.body;
    const updatedRoom = await Room.findByIdAndUpdate(
        req.params.id,
        { roomname, roomdescription, roomprice, roomdiscount },
        { new: true }
    );
    if (!updatedRoom) {
        res.status(404);
        throw new Error("Room not found");
    }
    res.status(200).json(updatedRoom);
});

// @desc    Delete a room
// @route   DELETE /api/rooms/:id
// @access  Private/Admin
const deleteRoom =  asyncHandler (async (req, res) => {
    const room = await Room.findById(req.params.id);
    if (!room) {
        res.status(404);
        throw new Error("Room not found");
    }
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Room removed" });
});

module.exports= { getRooms, getRoom , createRoom, updateRoom, deleteRoom };