const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  email: String,
  phone: String,
  gender: String,
  location: String,
  arrival: Date,
  leaving: Date,
  guests: Number,
  total: Number,
  id_type: String,
  id_number: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
