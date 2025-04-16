const express  =  require ("express");
const router =  express.Router();

const {getRooms , getRoom , createRoom , updateRoom , deleteRoom} = require ("../controllers/roomsController.js");

// Get all rooms
router.get("/", getRooms);

// Get single room  
router.get("/:id", getRoom);

// Create a new room
router.post("/", createRoom);

// Update a room
router.put("/:id", updateRoom);

// Delete a room
router.delete("/:id", deleteRoom);

module.exports = router;