const mongoose = require('mongoose');

const roomBookingschema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    guests: { type: Number, required: true },
    checkindate: { type: Date, required: true },
    checkoutdate: { type: Date, required: true },
   roomtype: { type: String, required: true },
},{
    timestamps: true
}
); 
const RoomBooking = mongoose.model('RoomBooking', roomBookingschema);
module.exports = RoomBooking;