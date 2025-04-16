const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
    {
        roomname: { type: String, required: true },
        roomdescription: { type: String, required: true },
        roomprice: { type: Number, required: true },
        roomdiscount: { type: Number, required: true },
    },
    { timestamps: true }
);

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;